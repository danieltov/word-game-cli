/*

index.js: The file containing the logic for the course of the game, which depends on Word.js and:

Randomly selects a word and uses the Word constructor to store it

Prompts the user for each guess and keeps track of the user's remaining guesses

*/

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
    secret = '';

//functions
function getSecretWord() {
    let idx = Math.floor(Math.random() * food.length);
    secret = new Word(food[idx]);
    food.splice(idx, 1);
}

function isLetter(value) {
    let regex = RegExp('[A-Z]', 'gi');
    if (regex.test(value)) {
        return true;
    } else {
        return 'Please enter a letter only';
    }
}

function ask() {
    inquirer.prompt(question).then(function(answer) {
        // answer.guess is the guess.
        console.log(secret.guess(answer.guess));
    });
}

getSecretWord();
console.log(secret);
// ask();
