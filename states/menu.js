var menuState = {



  create: function () {

    // Here we display the name of the game. When defining text, the
    // first two parameters are x and y positional values, then the
    // actual text, and then the 'font' defines the font (of course)
    // and 'fill' refers to the font color.
    var background = game.add.sprite(0,0,'background');
    var musicMenu = game.add.audio('musicMenu');
    var pad1;
    var pad2;
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
    musicMenu.loop = true;
    musicMenu.play();
    /* input du pad1 */
    game.input.gamepad.start();
    pad1 = game.input.gamepad.pad1;

    /* Input du pad2 */
    game.input.gamepad.start();
    pad2 = game.input.gamepad.pad2;
    // We give the player instructions on how to start the game
        // We define the wkey as Phaser.Keyboard.W so that we can act
        // when the player presses it
      //var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W) || pad1.justPressed(PAD_START) || pad2.justPressed(PAD_START) ;
    // var wkey = pad2.justPressed(PAD_A);

        // When the player presses the W key, we call the start function
        //wkey.onDown.addOnce(this.start, this);
      },
      //game.input.keyboard.isDown(Phaser.Keyboard.W))
update : function() {
        if (game.input.gamepad.isDown(PAD_START)||game.input.keyboard.isDown(Phaser.Keyboard.W)) {
          game.state.start('mapMenu1');
      }
    },

      // The start function calls the play state
      start: function () {
        game.state.start('mapMenu1');
      },

    };
