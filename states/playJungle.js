var counter = 60;
var text = 0;
var pad1;
var pad2;
var ground;
var jumpTimer = 0;
var jumpTimer2=0;
var powerAnanas=0;
var playJungleState = {

  create : function() {
    game.physics.startSystem(Phaser.Physics.ARCADE);

    this.keyboard = game.input.keyboard;

    /* Ajout de la musique */
    music = game.add.audio('music');
    music.loop = true;
    music.play();

    /* Ajout du fond */
    this.backgroundGame = game.add.sprite(0,0,'fondJungle');

    /* Caractéristiques des plateformes */
    platforms = game.add.group();
    platforms.enableBody = true;
    platforms.physicsBodyType = Phaser.Physics.ARCADE;


    /*  Création de toutes les plateformes du niveau */
    ledge = platforms.create(0,120, 'bois');
    ledge.body.immovable = true;

    ledge = platforms.create(-70,200, 'bois');
    ledge.body.immovable = true;

    ledge = platforms.create(-20,340, 'bois');
    ledge.body.immovable = true;

    ledge = platforms.create(200,250, 'bois');
    ledge.body.immovable = true;

    ledge = platforms.create(900,700, 'bois');
    ledge.body.immovable = true;

    ledge = platforms.create(970,570, 'bois');
    ledge.body.immovable = true;

    ledge = platforms.create(700,540, 'bois');
    ledge.body.immovable = true;

    ledge = platforms.create(930,400, 'bois');
    ledge.body.immovable = true;

    ledge = platforms.create(500,350, 'bois');
    ledge.body.immovable = false;
    ledge.body.checkCollision.up = true;
    ledge.body.checkCollision.down = false;
    ledge.body.checkCollision.left = false;
    ledge.body.checkCollision.right = false;

    ledge = platforms.create(750,240, 'bois');
    ledge.body.immovable = true;

    ledge = platforms.create(300,500, 'bois');
    ledge.body.immovable = true;

    ledge = platforms.create(500,130, 'bois');
    ledge.body.immovable = true;

    ledge = platforms.create(450,155, 'bois');
    ledge.body.immovable = true;

    ledge = platforms.create(550,155, 'bois');
    ledge.body.immovable = true;

    ledge = platforms.create(100,620, 'bois');
    ledge.body.immovable = false;

    ledge = platforms.create(500,630, 'bois');
    ledge.body.immovable = true;
    ledge.body.checkCollision.up = false;
    ledge.body.checkCollision.down = false;

    /* Cractéristiques du joueur */
    this.meuf = game.add.sprite(950, 550, 'meuf');
    this.physics.arcade.enable(this.meuf);
    this.meuf.body.gravity.y = 3000;
    this.meuf.body.collideWorldBounds = true;
    this.meuf.animations.add('gauche',[13,12,11,9,8,7],10,true);
    this.meuf.animations.add('droite',[0,1,2,4,5,6],10,true);

    /* Cractéristiques du fruit */
    this.fruit = game.add.sprite(25,0,'banana');
    this.fruit.anchor.setTo (0.5,0.5);
    this.physics.arcade.enable(this.fruit);
    this.fruit.body.gravity.y = 3000;
    this.fruit.body.collideWorldBounds = true;
    this.fruit.animations.add('left',[],10,true);
    this.fruit.animations.add('right',[],10,true);

    /* Compteur */
    text = game.add.text( game.world.centerX,25, 'Temps restant : ' + counter, {font : "26px Arial", fill : "#ffffff", align : "center"});
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

    this.physics.arcade.collide(this.meuf,platforms);
    this.physics.arcade.collide(this.fruit,platforms);
    this.physics.arcade.collide(ground,this.meuf,meuf2win,null,this);
    this.physics.arcade.collide(ground,this.fruit,meuf1win,null,this);
    this.physics.arcade.collide(this.fruit,this.meuf, meuf1win,null,this);

    var xAxis1 = pad1.axis(PAD_AXIS_X);
    var yAxis1 = pad1.axis(PAD_AXIS_Y);
    var xAxis2 = pad2.axis(PAD_AXIS_X);
    var yAxis2 = pad2.axis(PAD_AXIS_Y);

    if (this.keyboard.isDown(Phaser.Keyboard.LEFT) || xAxis1 < -0.1) {
      this.meuf.body.velocity.x = -225;
     this.meuf.play('gauche');
    } else if (this.keyboard.isDown(Phaser.Keyboard.RIGHT) || xAxis1 > 0.1) {
      this.meuf.body.velocity.x = 225;
      this.meuf.play('droite');
    }
    else {
      this.meuf.body.velocity.x = 0;
      this.meuf.frame = 3;
      this.meuf.animations.stop();
    }
    if((this.keyboard.isDown(Phaser.Keyboard.UP) || pad1.justPressed(PAD_A)) && this.meuf.body.touching.down && game.time.now > jumpTimer){
      this.meuf.body.velocity.y = -1000;
      jumpTimer = game.time.now + 750;
    }

    if(this.keyboard.isDown(Phaser.Keyboard.A)&&(powerAnanas!=1)){
      powerAnanas = 1;
    this.fruit.body.velocity.y = -2000
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
    if((this.keyboard.isDown(Phaser.Keyboard.Z) || pad2.justPressed(PAD_A)) && this.fruit.body.touching.down &&  game.time.now > jumpTimer2){
     this.fruit.body.velocity.y = -1000;
     jumpTimer2 = game.time.now + 750;
   }

   if(this.fruit.position.y>=670){
     meuf1win();
   }
   if(this.meuf.position.y>=670){
     meuf2win();
   }

  }
};

function updateCounter() {
  counter--;
  text.setText('Temps restant : ' + counter);
  if(counter==0) {
    meuf2win();
  }
}

function meuf1win() {
  game.add.sprite(0,0,'win1');
  music.stop();
}

function meuf2win() {
  game.add.sprite(0,0,'win2');
  music.stop();
}
