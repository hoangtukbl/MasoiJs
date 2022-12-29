const Player = require('./player');

class Villagers extends Player {
    constructor(name, id) {
        super(name, id);
        this.setLegit(true);
        this.setRole('villager');
    }
}

module.exports = Villagers;
