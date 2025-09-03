
const hashArray = [];

export function serializeDefines(defines, names) {
    if (names) {
        const len = names.length;
        for (let i = 0; i < len; i++) {
            const name = names[i];
            hashArray[i] = name + defines[name];
        }
        hashArray.length = len;
    } else {
        let i = 0;
        for (let name in defines) {
            hashArray[i++] = name + defines[name];
        }
        hashArray.length = i;
    }

    return hashArray.join('');
}

export function serializePass(pass, excludeProperties = false) {
    let str = pass._programName + pass._cullMode;
    if (pass._blend) {
        str += pass._blendEq + pass._blendAlphaEq + pass._blendSrc + pass._blendDst
            + pass._blendSrcAlpha + pass._blendDstAlpha + pass._blendColor;
    }
    if (pass._depthTest) {
        str += pass._depthWrite + pass._depthFunc;
    }
    if (pass._stencilTest) {
        str += pass._stencilFuncFront + pass._stencilRefFront + pass._stencilMaskFront
            + pass._stencilFailOpFront + pass._stencilZFailOpFront + pass._stencilZPassOpFront
            + pass._stencilWriteMaskFront
            + pass._stencilFuncBack + pass._stencilRefBack + pass._stencilMaskBack
            + pass._stencilFailOpBack + pass._stencilZFailOpBack + pass._stencilZPassOpBack
            + pass._stencilWriteMaskBack;
    }

    str += serializeDefines(pass._defines, pass._defineNames);

    if (!excludeProperties) {
        str += serializeUniforms(pass._properties, pass._propertyNames);
    }

    return str;
}

export function serializePasses(passes, uniforms = false) {
    let hashData = '';
    for (let i = 0; i < passes.length; i++) {
        hashData += serializePass(passes[i], uniforms);
    }
    return hashData;
}

export function serializeUniforms(uniforms, names) {
    let index = 0;
    if (names) {
        for (let i = 0, len = names.length; i < len; i++) {
            let param = uniforms[names[i]];
            let prop = param.value;

            if (!prop) {
                continue;
            }

            if (prop._id != undefined) {
                continue;
            }
            else {
                hashArray[index] = prop.toString();
            }
            index++
        }
    } else {
        for (let name in uniforms) {
            let param = uniforms[name];
            let prop = param.value;

            if (!prop) {
                continue;
            }

            if (prop._id != undefined) {
                continue;
            }
            else {
                hashArray[index] = prop.toString();
            }
            index++
        }
    }


    hashArray.length = index;
    return hashArray.join(';');
}

export function murmurhash2(str, seed) {
    var
        l = str.length,
        h = seed ^ l,
        i = 0,
        k;

    while (l >= 4) {
        k =
            ((str.charCodeAt(i) & 0xff)) |
            ((str.charCodeAt(++i) & 0xff) << 8) |
            ((str.charCodeAt(++i) & 0xff) << 16) |
            ((str.charCodeAt(++i) & 0xff) << 24);

        k = (((k & 0xffff) * 0x5bd1e995) + ((((k >>> 16) * 0x5bd1e995) & 0xffff) << 16));
        k ^= k >>> 24;
        k = (((k & 0xffff) * 0x5bd1e995) + ((((k >>> 16) * 0x5bd1e995) & 0xffff) << 16));

        h = (((h & 0xffff) * 0x5bd1e995) + ((((h >>> 16) * 0x5bd1e995) & 0xffff) << 16)) ^ k;

        l -= 4;
        ++i;
    }

    switch (l) {
        case 3: h ^= (str.charCodeAt(i + 2) & 0xff) << 16;
        case 2: h ^= (str.charCodeAt(i + 1) & 0xff) << 8;
        case 1: h ^= (str.charCodeAt(i) & 0xff);
            h = (((h & 0xffff) * 0x5bd1e995) + ((((h >>> 16) * 0x5bd1e995) & 0xffff) << 16));
    }

    h ^= h >>> 13;
    h = (((h & 0xffff) * 0x5bd1e995) + ((((h >>> 16) * 0x5bd1e995) & 0xffff) << 16));
    h ^= h >>> 15;

    return h >>> 0;
}


export function getMaterialHash(material: cc.Material) {
    let hash = '';
    //@ts-ignore
    // hash += serializePasses(effect.passes, false);
    let effect = material._effect;
    if (effect) {
        hash += serializePasses(effect.passes, false);
    }
    return murmurhash2(hash, 666);
}