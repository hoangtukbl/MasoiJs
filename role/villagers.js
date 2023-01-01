const Player = require('./player');

class Villagers extends Player {
    constructor(user, id) {
        super(user, id);
        this.setLegit(true);
        this.setRole('villager');
    }
}

module.exports = Villagers;