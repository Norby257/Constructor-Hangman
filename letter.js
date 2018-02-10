var Letter = function(character) {
    //string val to store underlying char / on key up?
    //boolean
    //display char to user
    this.displayChar = function() {
        if (character) {
            console.log(character);
        } else {
            console.log("_");
        }
    };

    this.checkChar  = function() {
        if (character = computerCharacter) {
            character.guessed = true;
        }
    }


}


module.exports = Letter;