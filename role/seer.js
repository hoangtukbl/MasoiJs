const Player = require('./player')
class Seer extends Player {
    constructor(user, id) {
        super(user, id);
        this.setLegit(true);
        this.setRole('seer');
    }
}

module.exports = Seer;