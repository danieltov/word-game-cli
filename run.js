// TODO playAgain() function.

// requires
const Word = require('./word');
const inquirer = require('inquirer');

// bindings
let food = ['pizza', 'hamburger', 'spaghetti', 'sushi', 'lasagna', 'steak'],
    question = {
        type: 'input',
        name: 'guess',
        message: 'Guess a letter',
        validate: isLetter
    },
    wrong = false;
secret = '';

//functions
function getSecretWord(callback) {
    let idx = Math.floor(Math.random() * food.length);
    secret = new Word(food[idx]);
    food.splice(idx, 1);
    callback();
}

function isLetter(value) {
    let regex = RegExp('[A-Z]', 'gi');
    if (regex.test(value) && value.length === 1) {
        return true;
    } else {
        return 'Please enter a single letter only';
    }
}

function check() {
    for (let i = 0; i < secret.letters.length; i++) {
        if (!secret.letters[i].isGuessed) {
            wrong = true;
        }
    }
    if (wrong) {
        ask();
        wrong = false;
    } else {
        console.log('You won!');
    }
}

function ask() {
    if (secret.wrong.length < 10) {
        console.log(`You have ${10 - secret.wrong.length} guesses left`);
        inquirer.prompt(question).then(function(answer) {
            // answer.guess is the guess.
            console.log(secret.guess(answer.guess));
            check();
        });
    } else {
        return console.log("You don't have guesses left. You lose.");
    }
}

getSecretWord(check);
