const Player = require('./player')
class Cursed extends Player {
    constructor(user, id) {
        super(user, id);
        this.setLegit(true);
        this.setRole('cursed');
    }

    convert() {
        this.setRole('wolf');
        this.setLegit(false);
    }
}

module.exports = Cursed;