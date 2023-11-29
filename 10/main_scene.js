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
        this.background = this.add.image(0, 0, 'background').setOrigin(0);

        this.taro = this.physics.add.image(200, 300, 'taro');
        this.taro.angle = 0
    }

    update(time, delta) {
        // this.taro.setVelocityX(20);
        // this.taro.setVelocityY(20);
        this.taro.angle += 5; // 5度ずつ角度を増やす

        // 45度方向に移動する
        this.taro.setVelocityX(50); // +X方向に5の速度を設定
        this.taro.setVelocityY(-50); // -Y方向に5の速度を設定

        if (this.taro.x > this.sys.game.config.width || this.taro.y > this.sys.game.config.height) {
            this.taro.x = this.sys.game.config.width / 2;
            this.taro.y = this.sys.game.config.height / 2;
        }
    }
}

