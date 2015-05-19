var ScoreBoard = function(currentScore) {
    this.currentScore = currentScore;
    console.log('ScoreBoard created');
};

ScoreBoard.prototype.addPoint = function() {
    console.log(this.currentScore = currentScore + 1);
};