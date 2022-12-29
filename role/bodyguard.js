const Player = require('./player');

class Bodyguard extends Player {
    #idProtected;

    constructor(name, id) {
        super(name, id);
        this.setRole('bodyguard');
        this.setLegit(true);
    }

    protect(idProtected) {
        if (idProtected == this.#idProtected) {
            return false;
        }
        else{
            this.setProtected(idProtected);
            return true;
        }
    }

    setProtected(idProtected) {
        this.#idProtected = idProtected;
    }
}

module.exports = Bodyguard;
