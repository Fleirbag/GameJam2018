var loadState= {

  // The preload function is another standard Phaser function that we
  // use to define and load our assets
  preload: function() {

    // Add a loading label on the screen
    var loadingLabel = game.add.text(80, 150, 'loading...',
    {font: '30px Courier', fill: '#ffffff'});

    // Load all assets. The first parameter is the variable that
    // will point to the image, and the second parameter is the
    // image file itsself.
    game.load.image('background', 'asset/img/background.jpg');
    game.load.image('backgroundmap', 'asset/img/selection_perso.jpg');
    game.load.image('backgroundmap2', 'asset/img/selection_perso2.jpg');
    game.load.image('sky', 'asset/img/imgFondIce.png');
    game.load.image('ground', 'asset/img/ice.png');
    game.load.image('fond','asset/img/couchersoleil.jpg');
    game.load.image('ground','asset/img/plateforme.png');
    game.load.spritesheet('carotteB','asset/img/perso/carotteBleu.png',65,85);
    game.load.spritesheet('croco','asset/img/perso/sprite_croco.png',60,80);
    game.load.spritesheet('citrouille', 'asset/img/perso/spriteCitrouille.png',59,82);
    game.load.spritesheet('dude','asset/img/fruits/sprite_ananas.png',50,97);
    game.load.spritesheet('perso1','asset/img/perso/perso11.png',62,75);
    game.load.spritesheet('carotte','asset/img/perso/sprite_carrot.png',65,85);
    game.load.spritesheet('meuf','asset/img/perso/meufSprite.png',60,89);
    game.load.spritesheet('banana','asset/img/fruits/sprite_banane.png',63,85);
    game.load.audio('music', 'asset/music/music-principal.ogg');
    game.load.audio('musicMenu', 'asset/music/music-menu.ogg');
    game.load.image('tile', 'asset/img/Lava.jpg');
    game.load.image('murLave', 'asset/img/Lava_mur.jpg');
    game.load.image('fondLave','asset/img/imgFondLave.jpg');
    game.load.image('solLave','asset/img/ground_lava.png');
    game.load.image('win1','asset/img/gameover_player1win.jpg');
    game.load.image('win2','asset/img/gameover_player2win.jpg');
    game.load.image('bullet','asset/img/bullet.png');
    game.load.image('fondJungle','asset/img/background_jungle.jpg');
    game.load.image('solJungle','asset/img/ground_jungle.png');
    game.load.image('bois','asset/img/bois_jungle.png');
    game.load.image('fondSea', 'asset/img/imgFondSea.png');
    game.load.image('solSand', 'asset/img/ground_sand.jpg');
    game.load.image('tileSand', 'asset/img/sand.png');
  },

  create: function() {
    // Call the menu state
    game.state.start('menu');
  }
};
