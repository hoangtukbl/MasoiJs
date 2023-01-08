import Player from "./player";

class Wolf extends Player {
    private targetKill: string;

    constructor(user: object[], id: string) {
        super(user, id, 'wolf', false);
        this.targetKill = '';
    }

    kill(id12Kill: string) {
        this.targetKill = id12Kill;
    }

    getTargetKill(): string {
        return this.targetKill;
    }
}

module.exports = Wolf;
