class userInterface extends Phaser.Sprite {
    constructor(game) {
        super(game);
        game.add.existing(this);
        game.physics.arcade.enable(this);
        this._initOverlay();
        this._player_energy = 20;
        this._player_health = 100;
        this._energy_regen = true;
        console.log('UIFile Fired!!');
        this.actionSelected = 0;

    }

    // Initialise menu items here
    _initOverlay() {
        this.attackButton = this.game.add.sprite(20, 20, 'attack');
        this.attackButton.fixedToCamera = true;
        this.attackButton.inputEnabled = true;
        this.attackButton.events.onInputDown.add(this._attackAction, this);

        this.defendButton = this.game.add.sprite(20, 56, 'defend');
        this.defendButton.fixedToCamera = true;
        this.defendButton.inputEnabled = true;
        this.defendButton.events.onInputDown.add(this._defendAction, this);




        this.spell1Button = this.game.add.sprite(20, 92, 'spell1');
        this.spell1Button.fixedToCamera = true;
        this.spell1Button.inputEnabled = true;
        this.spell1Button.events.onInputDown.add(this._spell1Action, this);

        this.spell2Button = this.game.add.sprite(20, 128, 'spell2');
        this.spell2Button.fixedToCamera = true;
        this.spell2Button.inputEnabled = true;
        this.spell2Button.events.onInputDown.add(this._spell2Action, this);

    }





    _attackAction() {
        console.log('attacking!');
        this.actionSelected = 1;
        console.log('actionSelected is ' + this.actionSelected);
    }

    _defendAction() {
        console.log('defending!');
        this.actionSelected = 2;
           console.log('actionSelected is ' + this.actionSelected);
    }

    _spell1Action() {
        console.log('firing spell1!');
        this.actionSelected = 3;
           console.log('actionSelected is ' + this.actionSelected);
    }

     _spell2Action() {
        console.log('firing spell2!');
         this.actionSelected = 4;
            console.log('actionSelected is ' + this.actionSelected);
    }

    // When combat event is is fired
    // We should have a round timer, keeping track of the rounds. so.. RoundCounter++; i guess.
    //Spawn roundtimer on screen.
    // player selects from the actions pool. Enemy randomly does the same. Round timer runs out and both play out their chosen attack.
    //Attacks can be blocked, spells disrupted.. perhaps.

    //So in programming terms we'd add 2 functions to the enemy.js, attack and block.
    //Two functions to the player.js, attack and block.
    //And in the userinterface we create this function. On start -> show roundtimer, randomly select a method for the enemy.
    //Player selects their chosen method of attack. two animations play and round resets. Gonna be interesting to code really.

    update() {

    }
}





//                    this._exampleTween = this.game.add.tween(this._reloadProgress).to({
//                    width: 0
//                }, 1500, 'Linear', true);
//                 this._reloading = true;
//                this.game.time.events.add(Phaser.Timer.SECOND * 1.6, this._reloadComplete, this);



//
//
//
//class userInterface extends Phaser.Sprite {
//    constructor(game) {
//        super(game);
//        game.add.existing(this);
//        game.physics.arcade.enable(this);
//        this._initHealthBar();
//        this._initEnergyBar();
//        this._player_energy = 20;
//        this._player_health = 100;
//        this._energy_regen = true;
//
//    }
//    _initHealthBar() {
//        console.log('healthBar fired!');
//        this._healthBar = this.game.add.image(4, 4, 'healthBar');
//        this._healthBar.fixedToCamera = true;
//        this._health_pixel = this.game.add.tileSprite(18, 12, 268, 12, 'healthPixel');
//        this._health_pixel.fixedToCamera = true;
//    }
//    _initEnergyBar() {
//        console.log('energyBar fired!');
//        this._energyBar = this.game.add.image(4, 38, 'energyBar');
//        this._energyBar.fixedToCamera = true;
//          this._energy_pixel = this.game.add.tileSprite(12, 44, 184, 12, 'energyPixel');
//        this._energy_pixel.fixedToCamera = true;
//    }
//    update() {
//        this._energy_pixel.width  = this._player_energy / 100 * 184;
//        this._health_pixel.width = this._player_health / 100 * 268;
//    if(this._player_energy < 100 && this._energy_regen) {
//        this._player_energy += 0.15;
//    }
//}}