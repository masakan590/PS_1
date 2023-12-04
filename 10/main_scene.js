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
        this.load.image('jiro', 'assets/jiro.png');
        this.load.image('hanako', 'assets/hanako.png');
        this.load.image('background', 'assets/background.png');
    }

    create() {

        this.background = this.add.image(0, 0, 'background').setOrigin(0);

        this.taro = this.physics.add.image(200, 300, 'taro').setDepth(2);
        this.taro.angle = 0

        this.jiro = this.physics.add.image(300, 200, 'jiro').setDepth(2);
        this.jiro.angle = 0

        this.cursors = this.input.keyboard.createCursorKeys();

        this.background = this.add.image(0, 0, 'background').setOrigin(0);
        this.add.text(600, 400, 'MyWorld');

        this.text = this.add.text(100, 50, '');

        this.input.keyboard.on('keydown-W', function (event) {
            const x = Phaser.Math.Between(100, 400); // X座標を100から400の範囲でランダムに生成
            const y = 100; // Y座標を100に固定

            const hanako = this.physics.add.image(x, y, 'hanako');
            hanako.setScale(0.2);
        }, this);


        //キーボード入力用
        this.input.keyboard.on('keydown-A', () => {
            this.text.setText('Hello!').setPosition(100, 50);
        });

        this.input.keyboard.on('keydown-S', () => {
            this.text.setText('Hey!').setPosition(100, 50);
        });

        this.input.keyboard.on('keydown-D', () => {
            this.text.setText('');
        });
    }

    update(time, delta) {
        // // this.taro.setVelocityX(20);
        // // this.taro.setVelocityY(20);
        // this.taro.angle += 5; // 5度ずつ角度を増やす

        // // 45度方向に移動する
        // this.taro.setVelocityX(50); // +X方向に5の速度を設定
        // this.taro.setVelocityY(-50); // -Y方向に5の速度を設定

        // if (this.taro.x > this.sys.game.config.width || this.taro.y > this.sys.game.config.height) {
        //     this.taro.x = this.sys.game.config.width / 2;
        //     this.taro.y = this.sys.game.config.height / 2;
        //}

         // taroの移動
        if (this.cursors.right.isDown) {
            this.taro.setVelocityX(50); // 右に50動く
        } else if (this.cursors.left.isDown) {
            this.taro.setVelocityX(-50); // 左に50動く
        } else {
            this.taro.setVelocityX(0); // キーが離されたら停止する
        }

        // jiroの移動
        if (this.cursors.right.isDown) {
            this.jiro.setVelocityX(-50); // 左に50動く
        } else if (this.cursors.left.isDown) {
            this.jiro.setVelocityX(50); // 右に50動く
        } else {
            this.jiro.setVelocityX(0); // キーが離されたら停止する
        }

        
    }
}

