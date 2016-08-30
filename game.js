// pet and random time are phaser objects. pet is the container for the moatCreature and randomTime = true = move about randomly.

// These variables are for the realtime function. It is currenlty only used to govern the hunger attribute, but i have big plans for it.
var seconds = 0;
var hunger = 120; // Default is 120
var food = 0;
var happiness = 30; // Default is 30
var eat;




var healthMeter = document.getElementById('healthMeter');
var happinessMeter = document.getElementById('joyMeter');
var healthModifier = document.getElementById('sm1');
var joyModifier = document.getElementById('sm2');





/* // beginning ov frealtime

function Eat() {
    food = 20;
    console.log('Eat Invoked');
};



function realTime() {
    seconds++;
    // console.log(seconds);
    if (seconds === 10 && food <= 1) {
        healthModifier.className = 'statusModifierDecrease';
        console.log('HUNGER TICK! Hunger Decremented by 1, total hunger is: ' + hunger);
        hunger--;
    } else if (food > 0) {
        healthModifier.className = 'statusModifierIncrease';
        food--;
        // if function here (more than or equal to)
        if (hunger <= 120) {
            healthModifier.className = 'statusModifierIncrease';
            hunger++;
        };
        console.log('FEED TICK! feeding time left: ' + food + 'Current hunger is' + hunger);
    };

    if (seconds === 20) {
        console.log('Fire Off Joy Event');
        joyEvent();

    }

    if (seconds === 25) {
        seconds = 0;
    };


    healthMeterSize = hunger / 120 * 100;
    healthMeter.style.width = healthMeterSize + '%';

    joyMeterSize = happiness / 30 * 100;
    happinessMeter.style.width = joyMeterSize + '%';



    function joyEvent() {
        if (happiness > 0) {
            happiness--;
            console.log('happiness is currently at ' + happiness);
        }
    }

};





var oneSecond = setInterval(realTime, 1000)
*/

// End of realTime



//Start of Phaser object

var game = new Phaser.Game(360, 460, Phaser.CANVAS, 'phaser-example', {
    preload: preload,
    create: create,
    update: update,
    render: render
});



var pet;
var randomTime = true;



function generateCoordinate() {
    generatedHorizontal = Math.floor(Math.random() * (500 - 300)) + 300;
    generatedVertical = Math.floor(Math.random() * (340 - 20)) + 20;
    // console.log('Generated:  V = ' + generatedVertical + 'H = ' + generatedHorizontal);
};

function acquireCoordinate() {
    clearTimeout(create.timeMovement);
     /*var timeHandler = setTimeout(randomReset, 8000);*/
    randomTime = false;
    acquiredHorizontal = game.input.activePointer.worldY;
    acquiredVertical = game.input.activePointer.worldX;


    this.game.add.tween(pet).to({
        x: this.game.world.randomX = acquiredVertical,
        y: this.game.world.randomY = acquiredHorizontal
    }, 4500, Phaser.Easing.Linear.InOut, true);
    /*   
       console.log('Acquired:  V = ' + acquiredVertical + 'H = ' + acquiredHorizontal + 'Randomtime is now ' + randomTime);
       function randomReset() {
           randomTime = true;
           console.log('resetting randomtime');*/

};









function preload() {
    this.game.load.image('backyard', 'img/backyard.png');
    //this.load.spritesheet('pet', 'img/moatCreatureAnim.png', 80, 96);
    this.load.spritesheet('pet', 'img/moatCreatureAnim1Fin.png', 80, 92, 6);
    // this.game.load.image('pet', 'img/moattestmonster.png');

}

function create() {
    game.stage.disableVisibilityChange = true;
    this.background = this.game.add.sprite(0, 0, 'backyard');
    pet = this.game.add.sprite(180, 340, 'pet', 0);
    pet.anchor.setTo(0.5, 1.0);
    pet.animations.add('walk');
    pet.animations.play('walk', 8, true);

    // Start Ov Pet Behaviour
    //randomtime here. calling should turn randomTime false for a certain amount of time. Perhaps until end of anim. After anim turn randomtime to true again to resume movement.

    /* function randomtime() {
         randomTime = false;

     };*/

    //console.log('RandomTime evaluates to at beginning ' + randomTime);





        if (randomTime === true) {
            generateCoordinate();
            this.game.add.tween(pet).to({
                x: this.game.world.randomX = generatedVertical,
                y: this.game.world.randomY = generatedHorizontal
            }, 21000, Phaser.Easing.Linear.InOut, true);
    
    
    timeMovement = setInterval(petMovement, 1000);
}
    this.game.physics.enable(this.pet, Phaser.Physics.ARCADE);



} // End ov Create







function update() { // console.log('Pet Y is:' + pet.worldPosition.y);


    if (game.input.activePointer.isDown) {
        acquireCoordinate();
    }
};

function render() {}







/*



// pet and random time are phaser objects. pet is the container for the moatCreature and randomTime = true = move about randomly.
var pet;
var randomTime = true;
// These variables are for the realtime function. It is currenlty only used to govern the hunger attribute, but i have big plans for it.
var seconds = 0;
var hunger = 120; // Default is 120
var food = 0;
var happiness = 3; // Default is 30
var healthMeter = document.getElementById('healthMeter');
var happinessMeter = document.getElementById('joyMeter');
var healthModifier = document.getElementById('sm1');
var joyModifier = document.getElementById('sm2');
var eat;


function horizontalCoordinate() {
    horizontal = Math.floor(Math.random() * (500 - 300)) + 300;
    console.log(horizontal);
    return horizontal;
};

function verticalCoordinate() {
    vertical = Math.floor(Math.random() * (340 - 20)) + 20;
    console.log(vertical);
    return vertical;
};

    function Eat() {
        food = 20;
        console.log('Eat Invoked');
    };




    function realTime() {
        seconds++;
        // console.log(seconds);
        if (seconds === 10 && food <= 1) {
            healthModifier.className = 'statusModifierDecrease';
            console.log('HUNGER TICK! Hunger Decremented by 1, total hunger is: ' + hunger);
            hunger--;
        } else if (food > 0) {
            healthModifier.className = 'statusModifierIncrease';
            food--;
            // if function here (more than or equal to)
            if (hunger <= 120) {
                healthModifier.className = 'statusModifierIncrease';
                hunger++;
            };
            console.log('FEED TICK! feeding time left: ' + food + 'Current hunger is' + hunger);
        };

        if (seconds === 20) {
            console.log('Fire Off Joy Event');
            joyEvent();

        }

        if (seconds === 25) {
            seconds = 0;
        };


        healthMeterSize = hunger / 120 * 100;
        healthMeter.style.width = healthMeterSize + '%';
        // console.log(healthMeterSize);


        //Initiate Healthmeter properties below here.

        joyMeterSize = happiness / 30 * 100;
        happinessMeter.style.width = joyMeterSize + '%';
        // console.log(healthMeterSize);


        function joyEvent() {
            if (happiness > 0) {
                happiness--;
                console.log('happiness is currently at ' + happiness);
            }
        }

    };






    var oneSecond = setInterval(realTime, 1000)

    // End of time/food function



    //Start of Phaser object

    var game = new Phaser.Game(360, 460, Phaser.CANVAS, 'phaser-example', {
        preload: preload,
        create: create,
        update: update,
        render: render
    });




    function preload() {
        this.game.load.image('backyard', 'img/backyard.png');
        //this.load.spritesheet('pet', 'img/moatCreatureAnim.png', 80, 96);
        this.load.spritesheet('pet', 'img/moatCreatureAnim1Fin.png', 80, 92, 6);
        // this.game.load.image('pet', 'img/moattestmonster.png');

    }

    function create() {
        game.stage.disableVisibilityChange = true;
        this.background = this.game.add.sprite(0, 0, 'backyard');


        // Start Ov Pet Behaviour
        //randomtime here. calling should turn randomTime false for a certain amount of time. Perhaps until end of anim. After anim turn randomtime to true again to resume movement.

        function randomtime() {
            randomTime = false;

        };

        console.log('RandomTime evaluates to at beginning ' + randomTime);

        pet = this.game.add.sprite(180, 340, 'pet', 0);
        pet.anchor.setTo(0.5);
        pet.animations.add('walk');
        pet.animations.play('walk', 8, true);








        function petMovement() {
            horizontalCoordinate();
            verticalCoordinate();
            this.game.add.tween(pet).to({
                x: this.game.world.randomX = vertical,
                y: this.game.world.randomY = horizontal
            }, 21000, Phaser.Easing.Linear.InOut, true);

        };


        timeMovement = setInterval(petMovement, 1000);



        this.game.physics.enable(this.pet, Phaser.Physics.ARCADE);





    } // End ov Create

    function clearMovement() {
        clearInterval(timeMovement, 1900);
    };







    function update() { // console.log('Pet Y is:' + pet.worldPosition.y);
    }

    function render() {}








*/