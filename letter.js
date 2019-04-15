class Letter {
    constructor(char) {
        this.char = char;
        this.isGuessed = false;
        this.getChar = function() {
            if (this.isGuessed) {
                return this.char;
            } else {
                return '_';
            }
        };
        this.guess = function(guess) {
            if (guess.toLowerCase() === this.char) {
                this.isGuessed = true;
            } else {
                this.isGuessed = false;
            }
        };
    }
}

module.exports = Letter;
