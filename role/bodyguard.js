const Player = require('./player');

class Bodyguard extends Player{
    constructor(name, id) {
        super(name, id);
        this.setRole('bodyguard');
        this.setLegit(true);
    }
}

module.exports = Bodyguard;
