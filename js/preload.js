class Preload extends Phaser.State {
    preload() {

        //this.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
        // Images :
        this.load.image('player', 'img/playerTemplate.png');
        this.load.image('pointer', 'img/pointer.png');
        this.load.image('enemy', 'img/MonsterTemplate.png');
        this.load.image('basicTileset', 'img/basicTileset.png');
        
        
        // Ui Items
        this.load.image('attack', 'img/UiItems/attack.png');
        this.load.image('defend', 'img/UiItems/defend.png');
        this.load.image('spell1', 'img/UiItems/spell1.png');
        this.load.image('spell2', 'img/UiItems/spell2.png');
        
        // js scripts :
        this.load.script('player', 'js/entity/player.js');
        this.load.script('simpleLevel', 'js/map/simplelevel.js');
        this.load.script('enemy', 'js/entity/enemy.js');
        this.load.script('userInterface', 'js/entity/userInterface.js');
        // json files :
        this.load.tilemap('level-1', 'json/mapOne.json', null, Phaser.Tilemap.TILED_JSON); //
    }
    create() {
        console.log("Preload.js:  Preload.create-> load_Level");
        this.game.state.add('SimpleLevel', SimpleLevel);
        this.game.state.start('SimpleLevel');
    }

}