var playState = {

    create: function() {

		// Prepare the keyboard so that the human player can move the
		// player sprite around
		this.keyboard = game.input.keyboard;
this.backgroundGame = game.add.sprite(0,0,'fond')
		// Create the player sprite and enable physics
		this.player = game.add.sprite(16, 16, 'ananas');
    this.player.anchor.setTo (0.5,0.5);
  	game.physics.arcade.enable(this.player);
  	this.player.body.gravity.y = 500;
  	this.player.body.collideWorldBounds = true;

    music = game.add.audio('music');
  	music.play();

  	platforms = game.add.group();
  	platforms.enableBody=true;

  	var sol = platforms.create(0,game.world.height-40, 'ground');
  },

//anim: function{
//    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
  //  this.player.body.velocity.x = -150;
  //  }
  //  else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
  //    this.player.body.velocity.x = 150;
  //  }
  //  else if (game.input.keyboard.isDown(Phaser.Keyboard.UP) && perso.body.onFloor()) {
  //    this.player.body.velocity.y = -250;
  //  }
  //  else {
    //  this.player.body.velocity.x = 0;
    //  this.player.frame = 4;
//    }
//    }
    update: function() {

		// When the player sprite and win sprite overlap, the Win function
		// is called (notice that the Win function is capitalized while
		// the win sprite is not).
		//game.physics.arcade.overlap(this.player, this.win, this.Win, null, this);

		// Finally, we give the human player a means of moving the 'player' sprite (W,A,S,D
		// in this case)
		// Enabling movement along the x axis
		if (this.keyboard.isDown(Phaser.Keyboard.A)) {
			this.player.body.velocity.x = -175;
		} else if (this.keyboard.isDown(Phaser.Keyboard.D)) {
			this.player.body.velocity.x = 175;
		} else {
			this.player.body.velocity.x = 0;
		}
		// Enabling movement along the y axis
		if (this.keyboard.isDown(Phaser.Keyboard.W)) {
			this.player.body.velocity.y = -175;
		} else if (this.keyboard.isDown(Phaser.Keyboard.S)) {
			this.player.body.velocity.y = 175;
		} else{
			this.player.body.velocity.y = 0;
		}
	},

	Win: function() {
		// We start the win state
		game.state.start('win');
	}

}
