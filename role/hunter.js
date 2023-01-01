const Player = require('./player');

class Hunter extends Player {
    #targetKill;
    constructor(user, id) {
        super(user, id);
        this.setRole('hunter');
        this.setLegit(true);
    }

    kill(id12Kill) {
        this.#targetKill = id12Kill;
    }

    getTargetKill() {
        return this.#targetKill;
    }
}

module.exports = Hunter;