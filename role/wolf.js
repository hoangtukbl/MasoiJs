const Player = require('./player');

class Wolf extends Player {
    constructor(name, id) {
        super(name, id);
        this.setRole('wolf');
        this.setLegit(false);
    }

    kill(){

    }
}

module.exports = Wolf;
