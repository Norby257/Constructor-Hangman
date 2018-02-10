// const promptUser = require('inquirer');


//something with argv and how to store what letter they pressed?
const letter = require("./letter");
const word = require("./word");

 console.log("Guess a letter!");
//array of words that I have  scott pilgrim themed 

randomWord();


//function that picks a random word 
    function randomWord(wordBank) {
        var wordBank = ["Clash at Demonhead", "Bomb-ob", "Ramona", "Scott", "Guitar", "Vegan Police", "Envy Adams", "Todd", "Young Neil"];        
        let randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
        // console.log(randomWord);
        //split that word into an array
        console.log(randomWord.split(""));

    }




