var counter = 60;
var text = 0;
const PAD_A = 0;
const PAD_B = 1;
const PAD_X = 2;
const PAD_Y = 3;
const PAD_LB = 4;
const PAD_RB = 5;
const PAD_LT= 6;
const PAD_RT = 7;
const PAD_START = 10;
const PAD_SELECT = 11;
const PAD_AXIS_X = 0;
const PAD_AXIS_Y = 1;
var pad1;
var pad2;
var powerAnanas=0;
var powerPerso=0;
var calcul =0;
var jumpTimer = 0;
var jumpTimer2 =0;
var playGlaceState = {

  create: function() {
    game.physics.startSystem(Phaser.Physics.ARCADE);

    this.keyboard = game.input.keyboard;

    /* Ajout de la musique */
    music = game.add.audio('music');
    music.loop = true;
    music.play();

    /* Ajout du fond */
    this.backgroundGame = game.add.sprite(0,0,'sky');

    /* Caractéristiques des plateformes */
    platforms = game.add.group();
    platforms.enableBody = true;
    platforms.physicsBodyType = Phaser.Physics.ARCADE;

    /* Création du sol */
    ground = platforms.create(0, game.world.height - 40, 'ground');
    ground.scale.setTo(9, 9);
    ground.body.immovable = true;

    /*  Création de toutes les plateformes du niveau */
    ledge = platforms.create(0,575, 'ground');
    ledge.body.immovable = true;

    ledge = platforms.create(125, 575, 'ground');
    ledge.body.immovable = true;

    sprite = platforms.create(400, 575, 'ground');
    this.physics.enable(sprite, Phaser.Physics.ARCADE);
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
    this.physics.enable(platMouv, Phaser.Physics.ARCADE);
    platMouv.body.collideWorldBounds = true;
    platMouv.body.bounce.setTo(1,1);
    platMouv.body.velocity.y = -100;

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
    this.physics.enable(sprite2, Phaser.Physics.ARCADE);
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


    /* Cractéristiques du joueur */
    this.player = game.add.sprite(900, 600, 'perso1');
    this.player.anchor.setTo (0.5,0.5);
    this.physics.arcade.enable(this.player);
    this.player.body.gravity.y = 3000;
    this.player.body.collideWorldBounds = true;
    this.player.animations.add('gauche',[11,10,9],10,true);
    this.player.animations.add('droite',[13,14,15,16],10,true);

    /* Cractéristiques du fruit */
    this.fruit = game.add.sprite(25,0,'dude');
    this.fruit.anchor.setTo (0.5,0.5);
    this.physics.arcade.enable(this.fruit);
    this.fruit.body.gravity.y = 3000;
    this.fruit.body.collideWorldBounds = true;
    this.fruit.animations.add('left',[],10,true);
    this.fruit.animations.add('right',[],10,true);

    /* Compteur */
    text = game.add.text( game.world.centerX + 7,25, 'Temps restant : ' + counter, {font : "26px Arial", fill : "#ffffff", align : "center"});
    text.anchor.setTo(0.5,0.5);
    game.time.events.loop(Phaser.Timer.SECOND, updateCounter, this);

    /* input du pad1 */
    game.input.gamepad.start();
    pad1 = game.input.gamepad.pad1;

    /* Input du pad2 */
    game.input.gamepad.start();
    pad2 = game.input.gamepad.pad2;

  },


  update: function() {

    this.physics.arcade.collide(this.player,platforms);
    this.physics.arcade.collide(this.fruit,platforms);
    this.physics.arcade.collide(this.player,ground);
    this.physics.arcade.collide(this.fruit,ground);
    this.physics.arcade.collide(sprite,platMouv);
    this.physics.arcade.collide(sprite2,platMouv);
    this.physics.arcade.collide(this.fruit,this.player, player1win,null,this);

    var xAxis1 = pad1.axis(PAD_AXIS_X);
    var yAxis1 = pad1.axis(PAD_AXIS_Y);
    var xAxis2 = pad2.axis(PAD_AXIS_X);
    var yAxis2 = pad2.axis(PAD_AXIS_Y);


    if (this.keyboard.isDown(Phaser.Keyboard.LEFT) || xAxis1 < -0.1) {
      this.player.body.velocity.x = -250;
      this.player.play('gauche');
    } else if (this.keyboard.isDown(Phaser.Keyboard.RIGHT) || xAxis1 > 0.1) {
      this.player.body.velocity.x = 250;
      this.player.play('droite');
    }
    else {
      this.player.body.velocity.x = 0;
      this.player.frame = 2;
      this.player.animations.stop();
    }

    if((this.keyboard.isDown(Phaser.Keyboard.UP) || pad1.justPressed(PAD_A)) && this.player.body.touching.down&& game.time.now > jumpTimer){
      this.player.body.velocity.y = -1000;
      jumpTimer = game.time.now + 750;
    }

    if(this.keyboard.isDown(Phaser.Keyboard.A)&&(powerAnanas!=1)){
      powerAnanas = 1
      this.fruit.x=25;
      this.fruit.y=0;
    }

    if (this.keyboard.isDown(Phaser.Keyboard.Q) || xAxis2 < -0.1) {
      this.fruit.body.velocity.x = -225;
      this.fruit.play('left');
    } else if (this.keyboard.isDown(Phaser.Keyboard.D) || xAxis2 > 0.1) {
      this.fruit.body.velocity.x = 225;
      this.fruit.play('right');
    }
    else {
      this.fruit.body.velocity.x = 0;
      this.fruit.frame = 1;
      this.fruit.animations.stop();
    }
    if((this.keyboard.isDown(Phaser.Keyboard.Z) || pad2.justPressed(PAD_A)) && this.fruit.body.touching.down&& game.time.now > jumpTimer2){
      this.fruit.body.velocity.y = -1000;
      jumpTimer2 = game.time.now + 750;
    }

  }

};

function updateCounter() {
  counter--;
  text.setText('Temps restant : ' + counter);
  if(counter==0) {
    player2win();
  }
}

function player1win() {
  game.add.sprite(0,0,'win1');
  music.stop();
}

function player2win() {
  game.add.sprite(0,0,'win2');
  music.stop();
}

function power(){
  powerPerso = 1
  this.fruit.x=25;
  this.fruit.y=0;

}
