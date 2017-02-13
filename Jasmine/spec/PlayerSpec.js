describe("Player", function() {
  var player;
  var game;

  beforeEach(function() {
    player = new Player();
    game = new Game();
  });

  it("should be able to play a Game", function() {
    player.play(game);
    expect(player.currentlyPlayingGame).toEqual(game);

    //demonstrates use of custom matcher
    expect(player).toBePlaying(game);
  });

  describe("when game has been paused", function() {
    beforeEach(function() {
      player.play(game);
      player.pause();
    });

    it("should indicate that the game is currently paused", function() {
      expect(player.isPlaying).toBeFalsy();

      // demonstrates use of 'not' with a custom matcher
      expect(player).not.toBePlaying(game);
    });

    it("should be possible to resume", function() {
      player.resume();
      expect(player.isPlaying).toBeTruthy();
      expect(player.currentlyPlayingGame).toEqual(game);
    });
  });

  // demonstrates use of spies to intercept and test method calls
  it("tells the current game if the user has made it a favorite", function() {
    spyOn(game, 'persistFavoriteStatus');

    player.play(game);
    player.makeFavorite();

    expect(game.persistFavoriteStatus).toHaveBeenCalledWith(true);
  });

  //demonstrates use of expected exceptions
  describe("#resume", function() {
    it("should throw an exception if game is already playing", function() {
      player.play(game);

      expect(function() {
        player.resume();
      }).toThrowError("game is already playing");
    });
  });
});
