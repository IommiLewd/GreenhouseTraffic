/**
 * base class for a simple game level.
 *
 * @constructor  {}
 * @method   :
 * @property :
 * startPosition {} (x,y)
 */

class SimpleLevel extends Phaser.State {
    constructor() {
            super();
            // can be use later to identify tiles and tile_map
            // this.name = level_name;
        }
        // private methods :
    _loadLevel() {
        //this.game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
        //TODO: load the background : should depend on the level name
        this.game.canvas.oncontextmenu = function (e) {
            e.preventDefault();
        }
        this.stage.backgroundColor = "#4488AA";
        this._map = this.add.tilemap('level-1');
        this._map.addTilesetImage('basicTileset', 'basicTileset');
        this._collision_layer = this._map.createLayer('CollisionLayer');
        this._collision_layer.resizeWorld();
    }

    _addPlayer(x, y) {
        this.player = new Player(this.game, 200, 200);
    }
    _addEnemy() {
        this.enemy = new Enemy(this.game, 800, 400);
    }

    //We use this to find and create objects from the json.
    //    _findObjectsByType(targetType, tilemap, layer) {
    //        var result = [];
    //        tilemap.objects[layer].forEach(function (element) {
    //            if (element.type == targetType) {
    //                result.push(element);
    //            }
    //        }, this);
    //        return result;
    //    }




    _checkCollision() {
          
        this.game.physics.arcade.collide(this.enemy, this._collision_layer);
        this.game.physics.arcade.collide(this.player, this._collision_layer);
        this.game.physics.arcade.collide(this.player.target, this._collision_layer);
    }


    _initiateCombat() {
            console.log('Combat Initiated');
            this.player._combatOverride();

        }
        //public methods :
        //@override:
    preload() {}
    create() {
        //set the physics
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this._loadLevel();
        //        this._initcursor();
        this._addPlayer(0, 0);
        this._addEnemy();

        this.game.camera.follow(this.player);
        //        //Everything on _collision_layer will collide
        this._map.setCollisionBetween(0, 160, true, this._collision_layer);
        //        this._map.setTileIndexCallback([33, 43, 51, 61], this.player.setOnLadder, this.player, this._ladder_layer);

    }
    update() {
        this._checkCollision();
   

//              this.physics.arcade.overlap(this.bullets, this._collision_layer, this._kill_bullet, function (bullet, _collision_layer) {
//                return _collision_layer.collides;
//            }, this);

        if (this.player.x < this.enemy.x + 128 && this.player.x > this.enemy.x - 128) {
          //  this._initiateCombat();
            
        }
    }
}