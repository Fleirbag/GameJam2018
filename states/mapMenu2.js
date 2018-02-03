var mapMenu2State = {

  create: function () {


    var backgroundmap = game.add.sprite(0,0,'backgroundmap2');

    // We give the player instructions on how to start the game
    // We define the wkey as Phaser.Keyboard.W so that we can act
    // when the player presses it
    var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);
     var akey = game.input.keyboard.addKey(Phaser.Keyboard.A);
     var left = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    // When the player presses the W key, we call the start function
    wkey.onDown.addOnce(this.startJungle, this);
    akey.onDown.addOnce(this.startSea, this);
    left.onDown.addOnce(this.previous, this);
  },
  update : function() {

          if (game.input.gamepad.isDown(PAD_A)) {
            game.state.start('playJungle');
        }
        if (game.input.gamepad.isDown(PAD_B)) {
          game.state.start('playSea');
      }
      if (game.input.gamepad.isDown(PAD_LB)) {
        game.state.start('mapMenu1');
      }
      },
  previous: function() {
    game.state.start('mapMenu1');
  },
  // The start function calls the play state
  startJungle: function() {
    game.state.start('playJungle');
  },
  startSea: function() {
    game.state.start('playSea');
  },
};
