
game.ExperienceManager = Object.extend({
    init: function(x, y, settings) {
        this.alwaysUpdate = true;
        this.gameOver = false;
    },
    update: function() {
        if (game.data.win === true && !this.gameover) {
            this.gameOver(true);
        } else if (game.data.win === false && !this.gameover) {
            this.gameOver(false);
        }

        return true;
    },
    gameOver: function(win) {
        if (win) {
            alert("You Win"),
                    game.data.exp += 10;
        } else {
            alert("You Lose");
            game.data.exp += 1;
        }

        this.gameover = true;
        me.save.exp = game.data.exp;
//          to save when you are done with the game
    }
//  when the game is over it tells you when or if you win or lose
});
