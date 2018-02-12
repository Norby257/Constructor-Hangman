const inquirer = require('inquirer');
const letters = require('./letter');
const word = require('./word');
// var userGuess = process.argv[2];

//something with argv and how to store what letter they pressed?
// const letter = require("./letter");
// const word = require("./word");

//array of words that I have  scott pilgrim themed 
//accidentally put Word.js logic here  so putting 

startGame();

//function that picks a random word 
    function startGame(wordBank) {
    
        //array of words
        var wordBank = ["Clash at Demonhead", "Bomb-ob", "Ramona", "Scott", "Guitar", "Vegan Police", "Envy Adams", "Todd", "Young Neil"];   
        //get a random word     
        let randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
        //split that word into an array 
        let splitWord = randomWord.split("");
        // console.log(splitWord.length);
        //keeping track of guesses 


    // function displaySpaces
        
        let numGuess = 0;
        if (numGuess < splitWord.length) {
            numGuess++;
            console.log(numGuess);
            console.log(`You have ${numGuess} left!`);
        }
    }

//start inquirer 
// inquirer.prompt([
//     {
//         name: "name",
//         message: "Guess a letter!"
//     }
// ]).then(function(answers) {
// });
//if a word is guessed correctly, call randomword again 



    //call to string/display letter 
