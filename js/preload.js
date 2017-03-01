class Preload extends Phaser.State {
    preload() {

        this.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
        // Images :
        this.load.spritesheet('player', 'img/tilesheets/PlayerCharacterOutline.png', 48, 48, 20);
        this.load.image('pointer', 'img/pointer.png');
        this.load.image('enemy', 'img/MonsterTemplate.png');
        //this.load.image('dom1', 'img/tilest/dom1newcolor.png');
        this.load.image('dom1', 'img/tilest/dom1.png');
        //Background Image!!
        this.load.image('background', 'img/tilest/backgroundimg.png');
        
        //Spells
        this.load.image('shield', 'img/spells/shield.png');
        //Ui Items
        this.load.image('HPixel', 'img/UiItems/healthPixel.png');
        this.load.image('healthBar', 'img/UiItems/healthBar.png');
        this.load.image('energyBar', 'img/UiItems/energyBar.png');
        this.load.image('DHPixel', 'img/UiItems/darkhealthPixel.png');
        this.load.image('goldCounter', 'img/UiItems/goldCounter.Png');
        // js scripts :
        this.load.script('player', 'js/entity/player.js');
        this.load.script('simpleLevel', 'js/map/simplelevel.js');
        this.load.script('enemy', 'js/entity/enemy.js');
        this.load.script('spells', 'js/entity/spells.js');
        this.load.script('userInterface', 'js/entity/userInterface.js');
        // json files :
        this.load.tilemap('level-1', 'json/domMapOne.json', null, Phaser.Tilemap.TILED_JSON); //
        //this.load.tilemap('level-1', 'json/mapOne.json', null, Phaser.Tilemap.TILED_JSON); //
    }
    create() {
        console.log("Preload.js:  Preload.create-> load_Level");
        this.game.state.add('SimpleLevel', SimpleLevel);
        this.game.state.start('SimpleLevel');
    }

}