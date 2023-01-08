import Player from "./player";

class Wolf extends Player {
    private targetKill: any;
    constructor(name: any, id: any) {
        super(name, id, 'wolf', false);
    }

    kill(id12Kill: any) {
        this.targetKill = id12Kill;
    }

    getTargetKill() {
        return this.targetKill;
    }
}

module.exports = Wolf;
