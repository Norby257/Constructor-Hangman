//constructor 
//just a placeholder param in the below for now 
function letter(letter) {
    this.letter = " ";  //how to store string val 
    this.guessed = false //boolean to see if letter is guest 
    this.guessedLetter = function() {
       if (letter) {
           return letter;
       }
       else console.log("_");
    }

    this.checkLetter = function(letter) {
       //pseudocody 
        if (letter === letter2) {
           this.guessed = true;
        }
        
    }


}