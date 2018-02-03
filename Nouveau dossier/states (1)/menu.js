var menuState = {

  create: function () {

    // Here we display the name of the game. When defining text, the
    // first two parameters are x and y positional values, then the
    // actual text, and then the 'font' defines the font (of course)
    // and 'fill' refers to the font color.
    var background = game.add.sprite(0,0,'background')
    var nameLabel = game.add.text(80, 80, 'Fruit Pursuit',
    { font: '50px Arial', fill: '#000000' });

    // We give the player instructions on how to start the game
    var startLabel = game.add.text(80, game.world.height-160,
      'Appuyez sur "W" pour commencer',
      {font: '25px Arial', fill: '#000000',});
      var creditsLabel = game.add.text(80, game.world.height-80,
        'Appuyez sur "C" pour afficher les crédits',
        {font: '25px Arial', fill: '#000000',});

        // We define the wkey as Phaser.Keyboard.W so that we can act
        // when the player presses it
        var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);

        // When the player presses the W key, we call the start function
        wkey.onDown.addOnce(this.start, this);
      },

      // The start function calls the play state
      start: function () {
        game.state.start('play');
      },
    };
