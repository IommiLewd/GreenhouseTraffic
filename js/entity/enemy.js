/**
 * base class for the player.
 * @constructor
 *  game : the phaser game.
 *  posx : his location in x.
 *  posy : his location in y.
 * @method toggleCombatMode
 *  change the player mode on Combat Mode.
 * @method reload
 *  TODO: reload the current weapon magazine
 * @property onLadder
 *  the player colliding with a ladder boolean.
 *  @getter : isOnLadder;
 *  @setTrue : setOnLadder;
 *  @reset : resetOnLadder
 * @method update :
 *
 */
class Enemy extends Phaser.Sprite {
    constructor(game, posx, posy, tilemap) {
        super(game, posx, posy, 'enemy', 0);
        game.add.existing(this);
        game.physics.arcade.enable(this);
        this.body.collideWorldBounds = true;
        this.game.physics.arcade.gravity.y = 360;
        this.anchor.setTo(0.5);
        this._map = game.add.tilemap('level-1');
        this._health = 100;
        this._initHealthIndicator();
    }
    
    _initHealthIndicator() {
        this.healthStatus = this.game.add.tileSprite(0, -56, 110, 10, 'HPixel');
        this.healthStatus.anchor.setTo(0.5);
        this.addChild(this.healthStatus);
    }
    
    _displayHealthIndicator() {
        
    }
    
    _enemyDamageTaken() {
        
    }
    //@override
    update() {
    }
}