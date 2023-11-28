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

    create() {
        this.taro = this.physics.add.image(200, 300, 'taro');
        
        const velocity = 200;
        const angle = Phaser.Math.DegToRad(45);
        
        // ゲームのフレームごとの更新
        this.update = () => {
            this.taro.setVelocity(velocity * Math.cos(angle), velocity * Math.sin(angle));
        };
    }

    update() {
        // 毎フレームごとの更新関数を実行
        this.update();
    }
}

