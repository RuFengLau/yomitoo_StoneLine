import YmtUserData from "../YmtUserData";

export default class AudioUtil {

    private static musicHandle = null;

    private static effectHandle = [];
    
    static playSound(path: any, loop: boolean = false) {
        if (!YmtUserData.soundPlay) return;
        if (typeof path == "undefined" || path == null)
            return null;
        if (cc.loader.getRes(path, cc.AudioClip) != null)
            path = cc.loader.getRes(path, cc.AudioClip);
        else if (typeof path === 'string')
            path = cc.url.raw('resources/' + path);
        let handle = cc.audioEngine.playEffect(path, loop);

        return handle;
    }

    static stopSound(audioID: number) {
        if (Number(audioID) !== NaN) {
            cc.audioEngine.stopEffect(audioID);
        }
    }

    static stopAllSounds() {
        cc.audioEngine.stopAllEffects();
    }

    static playMusic(path: any, loop: boolean = true) {
        if (!YmtUserData.musicPlay) return;
        if (typeof path == "undefined" || path == null)
            return null;
        if (cc.loader.getRes(path, cc.AudioClip) != null)
            path = cc.loader.getRes(path, cc.AudioClip);
        else if (typeof path === 'string')
            path = cc.url.raw('resources/' + path); 
        this.stopMusic();
        this.musicHandle = cc.audioEngine.playMusic(path, loop);
    }

    static stopMusic() {
        this.musicHandle = null;
        cc.audioEngine.stopMusic();
    }

    static pauseAll() {
        cc.audioEngine.pauseAll();
    }
    
    static resumeAll() {
        cc.audioEngine.resumeAll();
    }

    static isMusicPlaying() {
        return cc.audioEngine.isMusicPlaying();
    }

    static pauseMusic() {
        if (this.musicHandle) {
            cc.audioEngine.pauseMusic();
        }
    }
    
    static resumeMusic() {
        if (this.musicHandle) {
            cc.audioEngine.resumeMusic();
        }
    }

    static stopAll(): void {
        cc.audioEngine.stopAll();
    }

    static setSoundVolume(volume: number): void {
        cc.audioEngine.setEffectsVolume(volume);
    }

    static setMusicVolume(volume: number): void {
		cc.audioEngine.setMusicVolume(volume);
    }

    
}