var counter = 60;
var text = 0;
var pad1;
var pad2;
var ground;
var jumpTimer = 0;
var jumpTimer2=0;
var playSeaState = {

  create : function() {
    game.physics.startSystem(Phaser.Physics.ARCADE);

    this.keyboard = game.input.keyboard;

    /* Ajout de la musique */
    music = game.add.audio('music');
    music.loop = true;
    music.play();

    /* Ajout du fond */
    this.backgroundGame = game.add.sprite(0,0,'fondSea');

    /* Caractéristiques des plateformes */
    platforms = game.add.group();
    platforms.enableBody = true;
    platforms.physicsBodyType = Phaser.Physics.ARCADE;

    /* Création du sol */
    ground = platforms.create(0, game.world.height - 40, 'solSand');
    ground.scale.setTo(1.5, 1);
    ground.body.immovable = true;

    /*  Création de toutes les plateformes du niveau */
    ledge = platforms.create(0,120, 'tileSand');
    ledge.body.immovable = true;

    ledge = platforms.create(100,270, 'tileSand');
    ledge.body.immovable = true;

    ledge = platforms.create(0,420, 'tileSand');
    ledge.body.immovable = true;

    ledge = platforms.create(0,420, 'tileSand');
    ledge.body.immovable = true;

    ledge = platforms.create(900,700, 'tileSand');
    ledge.body.immovable = true;

    ledge = platforms.create(800,550, 'tileSand');
    ledge.body.immovable = true;


    //ledge = platforms.create(680,550, 'tileSand');
    ledge.body.immovable = true;

    ledge = platforms.create(200,270, 'tileSand');
    ledge.body.immovable = true;

    ledge = platforms.create(270,500, 'tileSand');
    ledge.body.immovable = true;

    ledge = platforms.create(400,140, 'tileSand');
    ledge.body.immovable = true;

    ledge = platforms.create(400,400, 'tileSand');
    ledge.body.immovable = false;

    ledge = platforms.create(924,165, 'tileSand');
    ledge.body.immovable = true;

    ledge = platforms.create(800,350, 'tileSand');
    ledge.body.immovable = true;

    ledge = platforms.create(600,400, 'tileSand');
    ledge.body.immovable = true;

    /* Cractéristiques du joueur */
    this.player = game.add.sprite(950, 650, 'croco');
    this.player.anchor.setTo (0.5,0.5);
    this.physics.arcade.enable(this.player);
    this.player.body.gravity.y = 500;
    this.player.body.collideWorldBounds = true;
    this.player.animations.add('droite',[1,2,3,4],10,true);
    this.player.animations.add('gauche',[8,7,6,5],10,true);

    /* Cractéristiques du fruit */
    this.fruit = game.add.sprite(25,0,'carotteB');
    this.fruit.anchor.setTo (0.5,0.5);
    this.physics.arcade.enable(this.fruit);
    this.fruit.body.gravity.y = 500;
    this.fruit.body.collideWorldBounds = true;
    this.fruit.animations.add('left',[3,2,1],5,true);
    this.fruit.animations.add('right',[3,4,5],5,true);

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

    this.physics.arcade.collide(this.player,platforms);
    this.physics.arcade.collide(this.fruit,platforms);
    this.physics.arcade.collide(ground,this.player,player2win,null,this);
    this.physics.arcade.collide(ground,this.fruit,player1win,null,this);
    this.physics.arcade.collide(this.fruit,this.player, player1win,null,this);

    var xAxis1 = pad1.axis(PAD_AXIS_X);
    var yAxis1 = pad1.axis(PAD_AXIS_Y);
    var xAxis2 = pad2.axis(PAD_AXIS_X);
    var yAxis2 = pad2.axis(PAD_AXIS_Y);

    if (this.keyboard.isDown(Phaser.Keyboard.LEFT) || xAxis1 < -0.1) {

      if((this.player.position.y>=670) && (this.player.body.touching.down)){
        this.player.body.velocity.x = -225;
        this.player.play('gauche');
      }
      else{
        this.player.body.velocity.x = -270;
        this.player.play('gauche');
      }

    } else if (this.keyboard.isDown(Phaser.Keyboard.RIGHT) || xAxis1 > 0.1) {
      if((this.player.position.y>=670) && (this.player.body.touching.down)){
        this.player.body.velocity.x = 225;
        this.player.play('droite');
      }
      else{
        this.player.body.velocity.x = 270;
        this.player.frame=0;
        this.player.play('droite');
      }

    }
    else {
      this.player.body.velocity.x = 0;
      this.player.frame = 2;
      this.player.animations.stop();
    }
    if((this.keyboard.isDown(Phaser.Keyboard.UP) || pad1.justPressed(PAD_A)) && this.player.body.touching.down && game.time.now > jumpTimer){
      this.player.body.velocity.y = -500;
      jumpTimer = game.time.now + 350;
    }
    if((this.keyboard.isDown(Phaser.Keyboard.A) || pad2.justPressed(PAD_X)) && (powerAnanas!=1)){
      powerAnanas = 1;
      this.fruit.x+=150;
    }

    if (this.keyboard.isDown(Phaser.Keyboard.Q) || xAxis2 < -0.1) {
      if((this.fruit.position.y>=670) && (this.fruit.body.touching.down)){
        this.fruit.body.velocity.x = -150;
        this.fruit.play('left');
      }
      else{
        this.fruit.body.velocity.x = -225;
        this.fruit.play('left');
      }
    }
    else if (this.keyboard.isDown(Phaser.Keyboard.D) || xAxis2 > 0.1) {
      if((this.fruit.position.y>=670) && (this.fruit.body.touching.down)){
        this.fruit.body.velocity.x = 150;
        this.fruit.play('right');
      }
      else {
        this.fruit.body.velocity.x = 225;
          this.fruit.play('right');
        }
    }
    else {
      this.fruit.body.velocity.x = 0;
      this.fruit.frame = 1;
      this.fruit.animations.stop();
    }
    if((this.keyboard.isDown(Phaser.Keyboard.Z) || pad2.justPressed(PAD_A)) && this.fruit.body.touching.down &&  game.time.now > jumpTimer2){
     this.fruit.body.velocity.y = -500;
     jumpTimer2 = game.time.now + 350;
   }
   if (pad1.justPressed(PAD_START)||pad2.justPressed(PAD_START)) {
     game.state.start('mapMenu1');
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
