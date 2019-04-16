let Letter = require('./letter');

class Word {
    constructor(word) {
        this.word = word;
        this.letters = word.split('').map(x => new Letter(x));
        this.wrong = [];
        this.display = function() {
            let str = '';
            this.letters.forEach(element => {
                str += element.getChar() + ' ';
            });
            return str;
        };
        this.guess = function(char) {
            let found = 0;
            this.letters.forEach(element => {
                if (element.guess(char)) found++;
            });
            if (
                found === 0 &&
                !this.wrong.includes(char) &&
                !this.word.includes(char)
            )
                this.wrong.push(char);
            return this.display();
        };
    }
}

module.exports = Word;
