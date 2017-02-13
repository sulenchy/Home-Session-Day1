//the class (Blueprint Player)
function Player() {
}
//method play() : each player can play any game of his choice
Player.prototype.play = function(game) {
  this.currentlyPlayingGame = game;
  this.isPlaying = true;
};

//method pause: each player can pause an ongoing game
Player.prototype.pause = function() {
  this.isPlaying = false;
};

//method resum: each player can resume a paused game
Player.prototype.resume = function() {
  if (this.isPlaying) {
    throw new Error("game is already playing");
  }

  this.isPlaying = true;
};

//method makeFavorite: each player can make any of the game his favorite
Player.prototype.makeFavorite = function() {
  this.currentlyPlayingGame.persistFavoriteStatus(true);
};


