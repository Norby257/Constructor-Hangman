//  Game logic and constructor goes here 
//  dependenices 
var inquirer = require("inquirer");
var chalk = require("chalk");
var Word = require("Word");
var Words = require("./Words");


//  keeps score and controlls game flow 

function Game() {
    var self = this;

    //  initial game settings 
    this.play = function() {
        this.guessesLeft = 10;
        this.nextWord();
    };

    this.nextWord = function() {
        var randWord = Words[Math.floor(Math.random() * Words.length)];
        this.currentWord = new Word(randWord);
        console.log("\n" + this.currentWord + "\n");
        this.makeGuess();
    }
}

this.makeGuess = function() {
    this.askForLetter().then(function() {
        if (self.guessesLeft < 1) {
            console.log(
                "No guesses left! Word was: \"" + self.currentWord.getSolution( ) + "\"\n"
            );
            self.askToPlayAgain();
        }
        else if (self.currentWord.guessedCorrectly()) {
            console.log("Alrighty! next word!");
            self.guessesLeft = 10;
            self.nextWord()
        }
        else {
            self.makeGuess();
        }
    });
};


this.askToPlayAgain = function() {
    inquirer
        .prompt([
            {
                type: "confirm",
                name: "choice",
                message: "Play again?"
            }
        ])
        .then(function(val){
            if (val.choice) {
                self.play();
            }
            else {
                self.quit();
            }
        });
};


//  logic that gets user input 