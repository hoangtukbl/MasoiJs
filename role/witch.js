const Player = require('./player')
class Witch extends Player {
    #resurrection = 1;
    #poison = 1;
    constructor(user, id) {
        super(user, id);
        this.setLegit(true);
        this.setRole('witch');
    }

    resurrect(idDead) {
        if (this.#resurrection) {

        }
    }

    empoison(idPlayer) {

    }
}

module.exports = Witch;