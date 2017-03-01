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
        this._backgroundimg = this.add.tileSprite(-120, -120, 3200, 800, 'background');

        this.stage.backgroundColor = "#4488AA";
        this._map = this.add.tilemap('level-1');
        //this._map.addTilesetImage('basicTileset', 'basicTileset');  /// Old Config
        this._map.addTilesetImage('dom1', 'dom1');
        this._collision_layer = this._map.createLayer('CollisionLayer');
        this._background_layer = this._map.createLayer('BackLayer');
        this._collision_layer.resizeWorld();

    }

    _addPlayer(x, y) {
        this.player = new Player(this.game, 200, 200);
        this.player.smoothed = false;
    }
    _addEnemy() {
        this.enemies = this.add.group();
        this.enemy = new Enemy(this.game, 760, 100);
        this.enemies.add(this.enemy);
    }
    _addUserInterface() {
        this.userInterface = new userInterface(this.game);
    }
    _addSpells() {
            this._spells = new Spells(this.game, 0, 0, 10);
            console.log('spells Initialized');
        this._spells.anchor.setTo(this.player);
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

    _player_position_update() {
        var capturedPosition = this.player.body.x;
        this.enemies.forEach(function (enemy, enemies, player) {
            enemy._playerPositionX = capturedPosition;
        })
    }

    _enemyPlayerCollision(enemy, player) {
        this.player._cursorReset();
        this.enemy._enemyDamageTaken(90);
        this.userInterface._playerDamage(20);

    }




    _checkCollision() {
            this.game.physics.arcade.collide(this.enemy, this._collision_layer);
            this.game.physics.arcade.collide(this.enemy, this.player, this._enemyPlayerCollision, undefined, this);
            this.game.physics.arcade.collide(this.player, this._collision_layer);
            this.game.physics.arcade.collide(this.player.target, this._collision_layer);
        }
        //public methods :
        //@override:
    preload() {}
    create() {
        //set the physics
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this._loadLevel();
      
        this._addPlayer(0, 0);
        this._addEnemy();
        this._addSpells();
        this.game.camera.follow(this.player);
        //        //Everything on _collision_layer will collide
        this._map.setCollisionBetween(0, 160, true, this._collision_layer);
        //        this._map.setTileIndexCallback([33, 43, 51, 61], this.player.setOnLadder, this.player, this._ladder_layer);
        this._addUserInterface();
    }
    update() {
        this._backgroundimg.x = this.game.camera.x * 0.3;
        this._backgroundimg.y = this.game.camera.y * 0.3;
        this._checkCollision();
        this._player_position_update();
        //              this.physics.arcade.overlap(this.bullets, this._collision_layer, this._kill_bullet, function (bullet, _collision_layer) {
        //                return _collision_layer.collides;
        //            }, this);

        if (this.player.x < this.enemy.x + 128 && this.player.x > this.enemy.x - 128 && this.player._combat_mode_engaged === false) {
            //   this._initCombatMode();

        }
        if (this.game.input.activePointer.rightButton.isDown) {
            this.player._fireSpell();
            this._spells._fireSpell();
        }
    }
}