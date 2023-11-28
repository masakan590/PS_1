// シーンクラス
// 他のJSファイルから呼び出された場合はシーンを返す


class MainScene extends Phaser.Scene {

    // コンストラクタ
    constructor() {
        // 継承した「Phaser.Scene」クラスのコンストラクタの呼び出し
        super('MainScene');
    }

    preload()
    {
        this.load.image('taro', 'assets/taro.png');
        this.load.image('background', 'assets/background.png');
    }

    create()
    {
        this.add.image(400, 300, 'taro');
        const velocity = 200; // 速度を設定
        const angle = Phaser.Math.DegToRad(45); // 45度をラジアンに変換
        
        // X方向の速度とY方向の速度を計算し、taroに設定する
        this.taro.setVelocityX(velocity * Math.cos(angle));
        this.taro.setVelocityY(velocity * Math.sin(angle));
    }

}

