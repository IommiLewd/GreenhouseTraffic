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
class Spells extends Phaser.Sprite {
    constructor(game, posx, posy, damage) {
        super(game, posx, posy, 'shield', 0);
        game.add.existing(this);
        game.physics.arcade.enable(this);
        this.body.checkWorldBounds = true;
        this.body.outOfBoundsKill = true;
        this.anchor.setTo(0.5);
        this._map = game.add.tilemap('level-1');
        this._playerPositionX;
        this._playerPositionY;
        this.bullet;
        this._damage = damage;
    }

    _fireSpell() {
        console.log('_fireSpell Triggered');
       // this.bullet.reset(this._playerPositionX, this._playerPositionY);
       // this.bullet = this.bullets.getFirstDead();
    }

    update() {

    }
}




/*


 _initBullets() {
            this.bullets = this.game.add.group();
            this.bullets.enableBody = true;
            this.bullets.physicsBodyType = Phaser.Physics.ARCADE;
            this.bullets.createMultiple(500, 'bullet');
            this.bullets.setAll('checkWorldBounds', true);
            this.bullets.setAll('outOfBoundsKill', true);
            this.bullets.setAll('anchor.x', 0.5);
            this.bullets.setAll('anchor.y', 0.5);
            //  --- Disable Gravity for Each Bullet
            this.bullets.forEach(function (L) {
                L.body.allowGravity = false;
            })
        }
        //Fire Weapon
    _fireWeapon(fireRate, damage, recoil) {
        if (this.player._energyShieldActive === false) {
            this.bullet;
            this._damage = damage;
            this.fireRate = fireRate;
            if (this.game.time.now > this._nextFire && this.bullets.countDead() > 3) {
                this._nextFire = this.game.time.now + this.fireRate;
                this.bullet = this.bullets.getFirstDead();
                this.bullet.reset(this.player._gunPosition.x, this.player._gunPosition.y);
                this.game.camera.shake(0.006, 30);
                if (this.player._playerFacingRight) {
                    this.game.physics.arcade.velocityFromAngle(this.player._laser_pointer.angle, 1100, this.bullet.body.velocity);
                } else {
                    this.game.physics.arcade.velocityFromAngle(this.player._laser_pointer.angle *= -1, 1100, this.bullet.body.velocity);
                }
                this.bullet.angle = this.player._laser_pointer.angle;
                this.bullet.bringToTop();
                this.bullets.add(this.bullet);
                this.player._fireAnimation();
            }
        }
    }*/