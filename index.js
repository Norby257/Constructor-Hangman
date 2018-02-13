//Constants 
const inquirer = require('inquirer');
const Word = require('./word');

//score and guesses  - global variables 
letterArray = [];
arrayDashes = [];
totalGuesses = 0;
guessesLeft = 0;
wins = 0;

startGame();

//function that picks a random word 
    function startGame(wordBank) {
    
        //array of words

        var wordBank = ["Clash at Demonhead", "Bomb-ob", "Ramona", "Scott", "Guitar", "Vegan Police", "Envy Adams", "Todd", "Young Neil"];   
        //get a random word     
        let word = wordBank[Math.floor(Math.random() * wordBank.length)];
        console.log(word);

        //store word into a new word (using the word constructor)
        //pseudocode

        word = new Word("word");       
    }
        // start inquirier  
inquirer.prompt([
    {
        name: "name",
        message: "Guess a letter!"
    }
]).then(function(answers) {
    userGuesses();

    checkuserInput();
    //here is where we'd call the methods from word.js 
    
});

/*
if a word is guessed correctly, call randomword again 



*/ 


//functions 
function userGuesses() {
    this.totalGuesses = this.word.length + 3;
    this.guessesLeft = this.totalGuesses;
    
}
//compare user input to word in array 
function checkuserInput(userInput) {
    if (userInput === this.word) {
        userScore++;
        console.log("Woo! Here's another one!");
        userGuesses = 0;
        totalguesses = 0;
        
    } else {
        userGuesses++;
        totalGuesses--;
    }
}

