const player = require('./player')
class Witch extends player {
    #resurrection = 1;
    #poison = 1;
    constructor(name, id) {
        super(name, id);
        this.setLegit(true);
        this.setRole('witch');
    }

    resurrect(idDead){
        if(this.#resurrection){

        }
    }

    empoison(idPlayer){

    }
}

module.exports = Witch;
