var game = new Phaser.Game(1024, 768, Phaser.AUTO, 'content', { preload: preload, create: create, update: update });

function preload() {

    /* Importation de toutes les images/sprites nécessaires */
    game.load.image('sky', 'asset/img/imgFondIce.png');
    game.load.image('ground', 'asset/img/ice.png');
		game.load.spritesheet('fruit','asset/img/perso/perso1.png',63,94);
    game.load.spritesheet('dude', 'asset/img/fruits/sprite_ananas.png',50,97);
		game.load.audio('music','asset/music/music-principal.ogg');
    game.load.image('win1','asset/img/gameover_player1win.jpg');
    game.load.image('win2','asset/img/gameover_player2win.jpg');
game.load.tilemap('mario', 'asset/json/final.json', null, Phaser.Tilemap.TILED_JSON);
game.load.image('tiles', 'assets/json/Lava.jpg');

}

var map;
var layer;


function create() {





  map = game.add.tilemap('mario');

  //  The first parameter is the tileset name, as specified in the Tiled map editor (and in the tilemap json file)
  //  The second parameter maps this name to the Phaser.Cache key 'tiles'
  map.addTilesetImage('Louis', 'tiles');

  //  Creates a layer from the World1 layer in the map data.
  //  A Layer is effectively like a Phaser.Sprite, so is added to the display list.
  layer = map.createLayer('World1');

  //  This resizes the game world to match the layer dimensions
  layer.resizeWorld();




}


function update() {



}
