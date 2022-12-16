const Player = require('./player');

class Wolf extends Player {
    #targetKill;
    constructor(name, id) {
        super(name, id);
        this.setRole('wolf');
        this.setLegit(false);
    }

    kill(id12Kill){
        this.#targetKill = id12Kill;
    }

    getTargetKill(){
        return this.#targetKill;
    }
}

module.exports = Wolf;
