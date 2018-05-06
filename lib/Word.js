const letter = require('./letter.js');

// here's the constructor 
var Word = function() {
    // make array of new letter objects 
    let arrayFromWord = word.split(" ");

 //first function from letter called on each letter object
    arrayFromWord.forEach(function(character) {
        toString(character);
    });
    //second function - check character 
    arrayFromWord.forEach(function(element) {
        checkChar(character);

    });
}

module.exports = Word;


