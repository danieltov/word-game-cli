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
            if (!this.isGuessed) {
                if (guess.toLowerCase() === this.char) {
                    this.isGuessed = true;
                    return true;
                } else {
                    this.isGuessed = false;
                    return false;
                }
            }
        };
    }
}

module.exports = Letter;
