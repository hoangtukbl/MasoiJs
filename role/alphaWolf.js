const Player = require('./player');

class AlphaWolf extends Player {
    #targetKill;
    constructor(user, id) {
        super(user, id);
        this.setRole('alphaWolf');
        this.setLegit(false);
    }

    kill(id12Kill) {
        this.#targetKill = id12Kill;
    }

    getTargetKill() {
        return this.#targetKill;
    }
}
//có quyền đổi mục tiêu của cả đàn sói vào đêm hôm đó
//tiên tri soi ra dân ngu
module.exports = AlphaWolf;