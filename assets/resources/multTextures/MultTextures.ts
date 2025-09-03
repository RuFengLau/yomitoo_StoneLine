import { getMaterialHash } from "./MultUtils";


// 自定义组件，多纹理开关，useMult
// true: 参与多纹理, false: 不参与多纹理
//@ts-ignore
cc.Component.prototype.useMult = false;

const _textrue = {
  texture: null,
  defalut: new cc.Texture2D(),
  getImpl: function () {
    return this.texture;
  },
};

//@ts-ignore
cc.gfx.Texture2D.prototype.texID = -1;


//多纹理缓存
let _cachdUseCount: number = 0;
let _isMultTexture: boolean = false;
let _cacheMaterials: Array<cc.Material> = [];

export const MultBatch2D: any = {
  nativeObj: null,
  enable: false,
  parent: null,
  curID: 0,
  incID: 0,
  count: 0,
  hash: 0,
  reset: function () {
    if (this.count > 0) this.curID++;
    this.incID += this.count;
    this.count = 0;
  },

  clear: function () {
    let materials = _cacheMaterials;
    for (let i = 0; i < materials.length; i++) {
      let m: any = materials[i];
      m.destroy();
      m.decRef();
    }
    _cacheMaterials.length = 0;
  }
};

//提前加载多纹理材质
const loadMultTextures = function () {
  MultBatch2D.enable = false;
  //@ts-ignore
  cc.resources.load("multTextures/Mult-material", cc.Material, (err, material) => {
    if (!err) {
      //@ts-ignore
      let cacheMat = cc.Material.getBuiltinMaterial("2d-sprite");;
      if (cacheMat) {
        //@ts-ignore
        MultBatch2D.hash = getMaterialHash(cacheMat);
        MultBatch2D.parent = material;
        MultBatch2D.enable = true;
        material.addRef();
      }
    }
  });
}


//使用多纹理材质缓存
export const getMultMaterial = function (oldMat: any) {

  MultBatch2D.reset();

  _isMultTexture = false;

  if (!MultBatch2D.enable ||
    !oldMat || !oldMat.isMultTextures) {
    return oldMat;
  }

  if (!MultBatch2D.parent
    || !MultBatch2D.parent.isValid) {
    loadMultTextures();
    return oldMat;
  }

  let newMat: any = _cacheMaterials[_cachdUseCount++];
  if (!newMat || !newMat.isValid) {
    let MaterialVariant: any = cc.MaterialVariant;

    newMat = new MaterialVariant(MultBatch2D.parent);
    _cacheMaterials[_cachdUseCount - 1] = (newMat);
    for (let i = 0; i < 8; i++) {
      newMat.setProperty("texture" + i, _textrue.defalut);
    }
    newMat.updateHash(MultBatch2D.hash);
    newMat.define("USE_TEXTURE", true);
    newMat['isMultTextures'] = true;
    newMat['cacheTextures'] = [-1];
    newMat.addRef();

    if (CC_JSB) newMat._effect._nativeObj.updateHash(_cachdUseCount + 0.5);

  }


  _isMultTexture = true;

  return newMat;
}


//填充多纹理ID
const fillRenderDataTexID = function (cmp: any, texID: number) {

  let renderData = cmp._assembler._renderData;
  if (!renderData) return false;

  let uvX = 0;
  let vbuf = renderData.vDatas[0];
  if (cmp.dataDirty) {
    cmp.dataDirty = false;
    for (let i = 0, length = vbuf.length; i < length; i += 5) {
      uvX = ~~(vbuf[i + 2] * 100000);
      vbuf[i + 2] = uvX * 10 + texID;
    }
  } else {
    if (cmp.texID != texID) {
      for (let i = 0, length = vbuf.length; i < length; i += 5) {
        uvX = ~~(vbuf[i + 2] * 0.1);
        vbuf[i + 2] = uvX * 10 + texID;
      }
    }
  }

  cmp.texID = texID;

}


//绑定上传多纹理数据
const bindMultTexture = function (cmp: cc.RenderComponent, material: any, renderer: any) {
  if (!_isMultTexture || !material) return;

  //@ts-ignore
  let texture: any = material.effect.passes[0].getProperty("texture");
  if (!texture) {
    //兼容纹理丢失情况
    console.warn(cmp.node.name, ' texture lost !!!!!');
    material.setProperty("texture", _textrue.defalut);
    texture = _textrue.defalut; //return; //
  }


  const JSB = CC_JSB;
  const MB = MultBatch2D;
  //@ts-ignore
  let effect = material.effect;
  let id = texture.texID - MB.incID;
  if (id < 0) {

    if (MB.count >= 8) {
      if (!JSB) renderer._flush();
      renderer.material = getMultMaterial(material);
      renderer.node = material.getDefine("CC_USE_MODEL") ? cmp.node : renderer._dummyNode;
    }

    id = MB.count++;
    texture.texID = id + MB.incID;

    //绑定上传纹理->多纹理材质
    let curMaterial = renderer.material;
    let cache = curMaterial['cacheTextures'];
    if (cache[id] !== texture._id) {
      cache[id] = texture._id;
      _textrue.texture = texture;
      curMaterial.setProperty("texture" + id, _textrue);
      curMaterial.effect._dirty = false;
      curMaterial._dirty = false;
    }

  }

  if (JSB) {

    //@ts-ignore
    const assembler = cmp._assembler;
    assembler?.updateMaterial(0, renderer.material);

  }

  //记录上传纹理id->顶点数据
  fillRenderDataTexID(cmp, id);

}

//支持拖尾 MotionStreak
const injectMotionStreak = function () {
  if (cc.MotionStreak) {
    const MotionStreak: any = cc.MotionStreak.prototype;
    const lateUpdate = MotionStreak.lateUpdate;
    MotionStreak.useMult = true;

    MotionStreak.lateUpdate = function (dt: number) {
      lateUpdate.call(this, dt);
      if (this._assembler) {
        if (this._points.length >= 2) {
          this.dataDirty = true;
        }
      }
    }
  }

}


const injectRenderCmp = function () {
  if (CC_EDITOR) return;


  const RenderCmp: any = cc.RenderComponent.prototype;

  RenderCmp.texID = -1;
  RenderCmp.vDitry = true;
  RenderCmp.dataDirty = true;
  //顶点数据更改检测
  Object.defineProperty(RenderCmp, "_vertsDirty", {
    get: function () {
      return this.vDitry;
    },
    set: function (flag) {
      if (!flag && this.vDitry) {
        this.dataDirty = true;
      }
      this.vDitry = flag;
    },
  });

  //材质切换检测
  const setMaterial = RenderCmp.setMaterial;
  RenderCmp.setMaterial = function (index, material) {
    // let isMultTextures = false;
    // let oldMat = this._materials[index];
    // if (oldMat) {
    //   isMultTextures = oldMat.isMultTextures;
    // }

    let newMat = setMaterial.call(this, index, material);
    this.setVertsDirty(); //isMultTextures

    return newMat;
  }

  //多纹理材质hash检测
  const Material: any = cc.Material.prototype;
  const getHash = Material.getHash;
  Material.getHash = function () {
    let effect: any = this._effect;
    if (MultBatch2D.enable && effect && effect._dirty) {
      this['isMultTextures'] = false;
      let uir = this._owner;
      if (uir && !uir.node.is3DNode) {
        let label = uir instanceof cc.Label;
        let sprite = uir instanceof cc.Sprite;

        //如果原生富文本不稳定，可以尝试屏闭富文本
        // if(CC_JSB && label && uir.node.name.indexOf('RICHTEXT') >= 0) label = null; 
        if (uir.useMult || (sprite || (label && !uir._nativeTTF()))) {
          let hash = getMaterialHash(this);
          if (hash == MultBatch2D.hash) {
            this['isMultTextures'] = true;
            effect._dirty = false;
            effect._hash = hash;
            return hash;
          }
        }
      }
    }

    return getHash.call(this);
  }


  //重写 _checkBacth 合批分发函数
  RenderCmp._checkBacth = function (renderer, cullingMask) {

    let material: any = this._materials[0];
    if ((material && material.getHash() !== renderer.material.getHash()) || renderer.cullingMask !== cullingMask) {

      if (!CC_JSB) renderer._flush();
      renderer.node = material.getDefine("CC_USE_MODEL") ? this.node : renderer._dummyNode;
      renderer.material = getMultMaterial(material);
      renderer.cullingMask = cullingMask;
    }

    bindMultTexture(this, material, renderer);

  };

  cc.director.on(cc.Director.EVENT_BEFORE_DRAW, () => {
    _cachdUseCount = 0;
    MultBatch2D.reset();
    MultBatch2D.curID = 0;
  });

}


const injectToNative = function () {
  if (!CC_JSB) return;


  //@ts-ignore
  cc.Material.prototype._hash = -1; //缓存记录
  //@ts-ignore
  cc.Material.prototype._obj = null; //缓存记录

  //@ts-ignore
  cc.Component.prototype.isFlush = false; //模拟提交
  if (cc.MeshRenderer) {
    const MeshRender: any = cc.MeshRenderer.prototype;
    const onEnable = MeshRender.onEnable;
    MeshRender.onEnable = function () {
      onEnable.call(this);
      this.isFlush = true;
    }
  }

  if (cc.ParticleSystem3D) {
    const Particles: any = cc.ParticleSystem3D.prototype;
    const onEnable = Particles.onEnable;
    Particles.onEnable = function () {
      onEnable.call(this);
      this.isFlush = true;
    }
  }

  //@ts-ignore
  let RenderFlow = cc.RenderFlow;

  RenderFlow.FLAG_REORDER_CHILDREN = 1 << 29;
  RenderFlow.FLAG_WORLD_TRANSFORM_CHANGED = 1 << 30;
  RenderFlow.FLAG_OPACITY_CHANGED = 1 << 31;

  let _dirtyTargets = [];
  let _dirtyWaiting = [];
  let _rendering = false;

  var director = cc.director;
  RenderFlow.render = function (scene, dt, camera = null) {
    _rendering = true;

    RenderFlow.validateRenderers();

    for (let i = 0, l = _dirtyTargets.length; i < l; i++) {
      let node = _dirtyTargets[i];
      node._inJsbDirtyList = false;

      let comp = node._renderComponent;
      if (!comp) continue;
      let assembler = comp._assembler;
      if (!assembler) continue;

      let flag = node._dirtyPtr[0];

      if (flag & RenderFlow.FLAG_UPDATE_RENDER_DATA) {
        node._dirtyPtr[0] &= ~RenderFlow.FLAG_UPDATE_RENDER_DATA;
        assembler._updateRenderData && assembler._updateRenderData();
      }
      if (flag & RenderFlow.FLAG_COLOR) {
        node._dirtyPtr[0] &= ~RenderFlow.FLAG_COLOR;
        comp._updateColor && comp._updateColor();
      }

    }


    _dirtyTargets.length = 0;

    this.visitBegin(scene);

    dt = dt || 0;
    this._nativeFlow.render(scene._proxy, dt, camera);

    _dirtyTargets = _dirtyWaiting.slice(0);
    _dirtyWaiting.length = 0;


    _rendering = false;
  };

  RenderFlow.renderCamera = function (camera, scene) {
    RenderFlow.render(scene, 0, camera);
  }

  RenderFlow.init = function (nativeFlow) {
    cc.EventTarget.call(this);
    this._nativeFlow = nativeFlow;
  };

  RenderFlow.register = function (target) {
    if (target._inJsbDirtyList) return;

    if (_rendering) {
      _dirtyWaiting.push(target);
    } else {
      _dirtyTargets.push(target);
    }

    target._inJsbDirtyList = true;
  }


  const empty_cullingMask = 1;
  const empty_node = new cc.Node();
  const empty_material = new cc.Material();
  const Renderer = {
    node: empty_node,
    material: empty_material,
    cullingMask: empty_cullingMask,

    _dummyNode: empty_node,
    reset: function () {
      this.node = empty_node;
      this.empty_material = empty_material;
      this.cullingMask = empty_cullingMask;
      this.material = getMultMaterial(empty_material);
    },
    flush: function (node) {
      this.cullingMask = node._cullingMask;
      this.material = getMultMaterial(empty_material);
    }
  };


  cc.Node.prototype["realOpacity"] = 1;
  const FLAG_RENDER = RenderFlow.FLAG_RENDER;
  const FLAG_DONOTHING = RenderFlow.FLAG_DONOTHING;
  const FLAG_POST_RENDER = RenderFlow.FLAG_POST_RENDER;
  const buildTree = function (node) {

    let renderFlag = 0;
    let opacity = node.realOpacity;
    if (opacity == 0 || !node._activeInHierarchy) return;

    let comp = node._renderComponent;
    if (comp) {

      if (!node._dirtyPtr) return;
      renderFlag = node._renderFlag;
      if (renderFlag & FLAG_DONOTHING) return;

      if (renderFlag & FLAG_POST_RENDER) Renderer.flush(node);
      else if (renderFlag & FLAG_RENDER) {
        comp._checkBacth(Renderer, node._cullingMask);
        if (comp.isFlush) Renderer.flush(node);
      }
    }

    let children = node._children;
    for (let i = 0, n = children.length; i < n; i++) {
      let c = children[i];
      c.realOpacity = opacity * (~~c._opacity / 255);
      buildTree(c);
    }

    if (comp) {
      //cc.Mask Armature Skeleton
      if (renderFlag & FLAG_POST_RENDER) Renderer.flush(node);
    }
  };

  RenderFlow.visitBegin = function (node) {
    if (MultBatch2D.enable) {
      if (node) {
        buildTree(node);
      }
      Renderer.reset();
    }
  };

}



cc.game.once(cc.game.EVENT_GAME_INITED, () => {

  // creator 2.4.3 以上支持多纹理
  const vers = cc.ENGINE_VERSION.split('.');
  if (parseInt(vers[2]) < 3 || parseInt(vers[1]) < 4 || parseInt(vers[0]) < 2) {
    return;
  }

  loadMultTextures();
  injectMotionStreak();
  injectRenderCmp();
  injectToNative();

});
