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


    /*       








        function petMovement() {
            if (pet.worldPosition.y > 300) {
                this.game.add.tween(pet).to({
                    x: this.game.world.randomX,
                    y: this.game.world.randomY
                }, 21000, Phaser.Easing.Linear.InOut, true);
                console.log('evaluated to true');
            } else {
                this.game.add.tween(pet).to({
                    x: this.game.world.randomX,
                    y: this.game.world.randomY + 300
                }, 21000, Phaser.Easing.Linear.InOut, true);
                console.log('evaluated to true');
            };
        };



















    } else {
                    this.game.add.tween(pet).to({
                        x: this.game.world.randomX,
                        y: this.game.world.randomY
                    }, 19000, Phaser.Easing.Linear.InOut, true);
                }
            }
        }, this)
    */





    /*
     Backup of Original Code, You dunce.

    // pet and random time are phaser objects. pet is the container for the moatCreature and randomTime = true = move about randomly.
    var pet;
    var randomTime = true;
    // These variables are for the realtime function. It is currenlty only used to govern the hunger attribute, but i have big plans for it.
    var seconds = 0;
    var hunger = 120; // Default is 120
    var food = 0;
    var happiness = 15; // Default is 30
    var joy = 0;
    var healthMeter = document.getElementById('healthMeter');
    var happinessMeter = document.getElementById('joyMeter');
    var healthModifier = document.getElementById('sm1');
    var joyModifier = document.getElementById('sm2');
    var eat;


    function happyIncrease (happyVar) {
        happiness = happiness + happyVar;
        console.log(happiness);
    }


    function joyEvent() {

        if (happiness >= 1 && joy === 0) {
            happiness--;
            console.log('joyDecrease event Fired. Happiness level is now: ' + happiness);
        } else if (happiness === 30){
            joy--;
            console.log('Joy event is in effect, but happiness is full')
        }else{
            console.log('Joy is effect');
            joy--;
            happiness++;
        }

    console.log('happiness lvl is ' + happiness + ' Joy level is ' + joy);
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



        pet = this.game.add.sprite(180, 340, 'pet', 0);
        pet.anchor.setTo(0.5);
        pet.animations.add('walk');
        pet.animations.play('walk', 8, true);
        pet.game.time.events.loop(1500, function () {
            // console.log(randomTime);
            if (randomTime === true) {
                if (pet.worldPosition.y < 300) {
                    this.game.add.tween(pet).to({
                        x: this.game.world.randomX,
                        y: this.game.world.randomY + 300
                    }, 19000, Phaser.Easing.Linear.InOut, true);
                } else {
                    this.game.add.tween(pet).to({
                        x: this.game.world.randomX,
                        y: this.game.world.randomY
                    }, 19000, Phaser.Easing.Linear.InOut, true);
                }
            }
        }, this)


        this.game.physics.enable(this.pet, Phaser.Physics.ARCADE);
    }

    function update() {}

    function render() {}
    */