var mapMenu1State = {

  create: function () {


    var backgroundmap = game.add.sprite(0,0,'backgroundmap');

    // We give the player instructions on how to start the game
    // We define the wkey as Phaser.Keyboard.W so that we can act
    // when the player presses it
    var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);
    var akey = game.input.keyboard.addKey(Phaser.Keyboard.A);
    var right = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);

    // When the player presses the W key, we call the start function
    wkey.onDown.addOnce(this.startGlace, this);
    akey.onDown.addOnce(this.startLave, this);
   right.onDown.addOnce(this.next, this);
    //right.ondown.addonce(this.previous,this);

  },

  update : function() {

          if (game.input.gamepad.isDown(PAD_A)) {
            game.state.start('playGlace');
        }
        if (game.input.gamepad.isDown(PAD_B)) {
          game.state.start('playLave');
      }
      if (game.input.gamepad.isDown(PAD_RB)) {
        game.state.start('mapMenu2');
      }
      },
  next: function() {
    game.state.start('mapMenu2');
  },
  // The start function calls the play state
  startGlace: function() {
    game.state.start('playGlace');
  },

  startLave: function() {
    game.state.start('playLave');
  },

  //  previous: function(){
  //    game.state.start('mapMenu3')
  //  }


};
