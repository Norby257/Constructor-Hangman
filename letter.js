var Letter = function(character, guessed) {
    this.character = character;
    this.guessed = guessed; 
    //start checking if letter was guessed
    this.toString = function() {
        if (character) {
            console.log(character);
        } else {
            console.log("_");
        }
    };
    this.checkChar  = function() {
        if (this.char === this.guessed) {
            this.guessed = true;
        }
        else {
            this.guessed = false;
        }
    }


}
module.exports = Letter;