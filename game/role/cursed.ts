import Player from "./player";

class Cursed extends Player {
    constructor(user: object[], id: string) {
        super(user, id, 'cursed', true);
    }

    convert() {
        this.setRole('wolf');
        this.setLegit(false);
    }
}

module.exports = Cursed;
