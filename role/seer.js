const player = require('./player')
class Seer extends player {
    constructor(name, id) {
        super(name, id);
        this.setLegit(true);
        this.setRole('seer');
    }
}

module.exports = Seer;
