var id;

$(window).resize(function() {
    clearTimeout(id);
    id = setTimeout(resizeGame, 300);
});
var height = $(window).height();
var width = $(window).width();

var game = new Phaser.Game(width, height, Phaser.AUTO, 'sparkcards', { preload: preload, create: create });

function preload() {

    game.load.atlasJSONHash('button', '/assets/sprites/uppercaseLetters.png', '/assets/sprites/uppercaseLetters.json');
    //game.load.image('background','/assets/misc/blank.png');
}

function resizeGame() {
    var height = $(window).height();
    var width = $(window).width();
        
    game.width = width;
    game.height = height;
    game.stage.width = width;
    game.stage.height = height;
        
    if (game.renderType === Phaser.WEBGL){
        game.renderer.resize(width, height);
    }
    aButton.x = (width / 2) - 80;
    aButton.y = (height / 2) + 80;

    console.log(width);
    console.log(height);
    console.log(aButton.position);
}

var aButton;
var background;
var buttonIndex = 0;
var buttonLimit = 25; //26 letters in the alphabet

function create() {

    game.stage.backgroundColor = '#182d3b';

    //background = game.add.tileSprite(0, 0, 800, 600, 'background');

    aButton = game.add.button(game.world.centerX - 80, game.world.centerY - 80, 'button', actionOnClick, this, buttonIndex, buttonIndex, buttonIndex, buttonIndex);

    aButton.onInputOver.add(over, this);
    aButton.onInputOut.add(out, this);
    aButton.onInputUp.add(up, this);

}

function up() {
    //console.log('button up', arguments);
}

function over() {
    //console.log('button over');
}

function out() {
    //console.log('button out');
}

function actionOnClick () {
    buttonIndex++;

    if (buttonIndex > buttonLimit){
        buttonIndex = 0;
    }

    console.log(buttonIndex);
    aButton.setFrames(buttonIndex, buttonIndex, buttonIndex, buttonIndex);
    //background.visible =! background.visible;

}
