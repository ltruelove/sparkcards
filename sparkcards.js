var game = new Phaser.Game(800, 600, Phaser.AUTO, 'sparkcards', { preload: preload, create: create });

function preload() {

    game.load.atlasJSONHash('button', '/assets/sprites/uppercaseLetters.png', '/assets/sprites/uppercaseLetters.json');
    game.load.image('background','/assets/misc/starfield.jpg');

}

var button;
var background;

function create() {

    game.stage.backgroundColor = '#182d3b';

    background = game.add.tileSprite(0, 0, 800, 600, 'background');

    aButton = game.add.button(game.world.centerX - 80, 220, 'button', actionOnClick, this, 0, 0, 0, 0);

    aButton.onInputOver.add(over, this);
    aButton.onInputOut.add(out, this);
    aButton.onInputUp.add(up, this);

}

function up() {
    console.log('button up', arguments);
}

function over() {
    console.log('button over');
}

function out() {
    console.log('button out');
}

function actionOnClick () {

    background.visible =! background.visible;

}
