// You need a JS clear cache function
var Phaser;
var game = new Phaser.Game(360, 460, Phaser.CANVAS, 'phaser-example', {
    preload: preload,
    create: create,
    update: update,
    render: render
});

var pet;
var randomTime = 0;

function generateCoordinate() {
    generatedHorizontal = Math.floor(Math.random() * (550 - 300)) + 300;
    generatedVertical = Math.floor(Math.random() * (340 - 20)) + 20;
}


function acquireCoordinate() {
    acquiredHorizontal = game.input.activePointer.worldY;
    acquiredVertical = game.input.activePointer.worldX;
    //pointer = game.add.sprite(acquiredHorizontal, acquiredVertical, 'pointer');
}


function petMovement() {
    if (randomTime === 0) {
        generateCoordinate();
        this.game.add.tween(pet).to({
            x: this.game.world.randomX = generatedVertical,
            y: this.game.world.randomY = generatedHorizontal
        }, 21000, Phaser.Easing.Linear.InOut, true);
        console.log('petmovement is true');

    } else {

        randomTime--;
        console.log('petmovement is false, countdown is ' + randomTime);
        this.game.add.tween(pet).to({
            x: this.game.world.randomX = acquiredVertical,
            y: this.game.world.randomY = acquiredHorizontal
        }, 4500, Phaser.Easing.Linear.InOut, true);}}

timeMovement = setInterval(petMovement, 1000);















function preload() {
    this.game.load.image('backyard', 'img/backyard.png');
    this.load.spritesheet('pet', 'img/moatCreatureAnim1Fin.png', 80, 92, 6);
    this.game.load.image('pointer', 'img/minusmodifier.png');
}

function create() {
    game.stage.disableVisibilityChange = true;
    this.background = this.game.add.sprite(0, 0, 'backyard');
    pet = game.add.sprite(180, 340, 'pet', 0);
    pet.anchor.setTo(0.5, 1.0);
    pet.animations.add('walk');
    pet.animations.play('walk', 8, true);
    this.game.physics.enable(this.pet, Phaser.Physics.ARCADE);
} // End ov Create

function update() {
    
    game.input.onDown.add(move, this);

    function move() {

        acquireCoordinate();
        randomTime = 7;
    }
}


function render() {


}