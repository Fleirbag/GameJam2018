var game = new Phaser.Game(1024, 768, Phaser.AUTO, 'content', { preload: preload, create: create, update: update });

function preload() {

    /* Importation de toutes les images/sprites nécessaires */
    game.load.image('sky', 'asset/img/imgFondIce.png');
    game.load.image('ground', 'asset/img/ice.png');
		game.load.spritesheet('fruit','asset/img/perso/perso1.png',63,94);
    game.load.spritesheet('dude', 'asset/img/fruits/carotte_sprite.png');
  //  game.load.spritesheet('carotte','asset/img/fruits/carotte_sprite.png');
		game.load.audio('music','asset/music/music-principal.ogg');
    game.load.image('win1','asset/img/gameover_player1win.jpg');
game.load.image('win2','asset/img/gameover_player2win.jpg');

}

var player;
var platforms;
var fruit;
var music;
var sprite;
var sprite2;
var platMouv;


function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);

    /* Boucle infinie pour le lancement de la musique */
		music = game.add.audio('music');
		 music.loop = true;
		music.play();

    /*  Ajout du fond */
    game.add.sprite(0, 0, 'sky');

    /* Caractéristiques des plateformes */
    platforms = game.add.group();
    platforms.enableBody = true;
		platforms.physicsBodyType = Phaser.Physics.ARCADE;

    /* Création du sol */
    var ground = platforms.create(0, game.world.height - 40, 'ground');
    ground.scale.setTo(9, 9);
    ground.body.immovable = true;

    /*  Création de toutes les plateformes du niveau */
    var ledge = platforms.create(0,575, 'ground');
    ledge.body.immovable = true;

    ledge = platforms.create(125, 575, 'ground');
    ledge.body.immovable = true;

		sprite = platforms.create(400, 575, 'ground');
    game.physics.enable(sprite, Phaser.Physics.ARCADE);
	  sprite.body.collideWorldBounds = true;
    sprite.body.checkCollision.up = true;
    sprite.body.checkCollision.down = true;
    sprite.body.immovable = true;

		ledge = platforms.create(625, 575, 'ground');
    ledge.body.immovable = true;

		ledge = platforms.create(750, 575, 'ground');
    ledge.body.immovable = true;

		ledge = platforms.create(170, 425, 'ground');
    ledge.body.immovable = true;

		ledge = platforms.create(295, 425, 'ground');
    ledge.body.immovable = true;

		platMouv = platforms.create(420, 425, 'ground');
    game.physics.enable(platMouv, Phaser.Physics.ARCADE);
    platMouv.body.collideWorldBounds = true;
    platMouv.body.bounce.setTo(1,1);
    platMouv.body.velocity.y = -50;
    ledge.body.immovable = true;

		ledge = platforms.create(545, 425, 'ground');
		ledge.body.immovable = true;

		ledge = platforms.create(670, 425, 'ground');
		ledge.body.immovable = true;

		ledge = platforms.create(795, 425, 'ground');
		ledge.body.immovable = true;

		ledge = platforms.create(0, 275, 'ground');
    ledge.body.immovable = true;

		ledge = platforms.create(125, 275, 'ground');
    ledge.body.immovable = true;

		ledge = platforms.create(900, 275, 'ground');
    ledge.body.immovable = true;

		sprite2 = platforms.create(350, 275, 'ground');
    game.physics.enable(sprite2, Phaser.Physics.ARCADE);
    sprite2.body.collideWorldBounds = true;
    sprite2.body.checkCollision.up = true;
    sprite2.body.checkCollision.down = true;
    sprite2.body.immovable = true;

		ledge = platforms.create(475, 275, 'ground');
		ledge.body.immovable = true;

		ledge = platforms.create(700, 275, 'ground');
		ledge.body.immovable = true;

		ledge = platforms.create(0, 125, 'ground');
		ledge.body.immovable = true;

		ledge = platforms.create(125, 125, 'ground');
		ledge.body.immovable = true;

		ledge = platforms.create(250, 125, 'ground');
		ledge.body.immovable = true;

		ledge = platforms.create(375, 125, 'ground');
		ledge.body.immovable = true;

		ledge = platforms.create(650, 125, 'ground');
		ledge.body.immovable = true;

		ledge = platforms.create(775, 125, 'ground');
		ledge.body.immovable = true;

		ledge = platforms.create(900, 125, 'ground');
		ledge.body.immovable = true;

    /* Caractéristiques du joueur */
    /*fruit = game.add.sprite(25, 0, 'dude');
    game.physics.arcade.enable(fruit);
    fruit.body.gravity.y = 3000;
    fruit.body.collideWorldBounds = true;
    fruit.animations.add('gauche',[],10,true);
    fruit.animations.add('droite',[],10,true);*/

    fruit = game.add.sprite(25, 0, 'dude');
    game.physics.arcade.enable(fruit);
    fruit.body.gravity.y = 3000;
    fruit.body.collideWorldBounds = true;
    fruit.animations.add('gauche',[],10,true);
    fruit.animations.add('droite',[],10,true);


    /* Caractéristiques du fruit */
		player = game.add.sprite(900, 600, 'fruit');
		game.physics.arcade.enable(player);
		player.body.gravity.y = 3000;
    player.body.collideWorldBounds = true;
		player.animations.add('left',[11,10,9],10,true);
    player.animations.add('right',[13,14,15,16],10,true);
    player.body.checkCollision.up = true;
    player.body.checkCollision.down = true;
    player.body.checkCollision.left = true;
    player.body.checkCollision.right = true;


}


function update() {

    /* Collision entre le fruit/joueur avec les plateformes et entre le
    fruit et le joueur */
    game.physics.arcade.collide(player, platforms);
    game.physics.arcade.collide(fruit, platforms);
    game.physics.arcade.collide(fruit,player, player1win,null,this);
    game.physics.arcade.collide(sprite,platMouv);
    game.physics.arcade.collide(sprite2,platMouv);

    //détection entre les deux perso | http://examples.phaser.io/_site/view_full.html?d=arcade%20physics&f=sprite+vs+sprite.js&t=sprite%20vs%20sprite





    /* Mise en place des touches pour diriger le player */
    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
			player.body.velocity.x = -225;
      player.play('left');
		}
    else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
			player.body.velocity.x = 225;
      player.play('right');
		}
    else if (game.input.keyboard.isDown(Phaser.Keyboard.UP) && player.body.touching.down){
			player.body.velocity.y = -1000;
    }
    else {
      player.body.velocity.x = 0;
      player.frame = 2;
      player.animations.stop();
		}


    /* Mise en place des touches pour diriger le fruit */
    if (game.input.keyboard.isDown(Phaser.Keyboard.Q)) {
			fruit.body.velocity.x = -175;
      fruit.play('gauche');
		}
    else if (game.input.keyboard.isDown(Phaser.Keyboard.D)) {
			fruit.body.velocity.x = 175;
      fruit.play('droite');
		}
    else if (game.input.keyboard.isDown(Phaser.Keyboard.Z) && fruit.body.touching.down){
			fruit.body.velocity.y = -1000;
    }
    else {
      fruit.body.velocity.x = 0;
      fruit.frame = 2;
      fruit.animations.stop();
		}

}

function player1win() {
  game.add.sprite(0,0,'win1');

}

function player2win() {
  game.add.sprite(0,0,'win2');
}
