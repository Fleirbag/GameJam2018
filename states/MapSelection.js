var mapMenuState = {

  create: function () {


    var backgroundmap = game.add.sprite(0,0,'backgroundmap');

    // We give the player instructions on how to start the game
    // We define the wkey as Phaser.Keyboard.W so that we can act
    // when the player presses it
    var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);
     var akey = game.input.keyboard.addKey(Phaser.Keyboard.A);

    // When the player presses the W key, we call the start function
    wkey.onDown.addOnce(this.startGlace, this);
    akey.onDown.addOnce(this.startLave, this);
  },

  // The start function calls the play state
  startGlace: function() {
    game.state.start('playGlace');
  },

  startLave: function() {
    game.state.start('playLave');
  },
};
