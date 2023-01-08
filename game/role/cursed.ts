import Player from "./player";

class Cursed extends Player {
    constructor(name: any, id: any) {
        super(name, id, 'cursed', true);
    }

    convert() {
        this.setRole('wolf');
        this.setLegit(false);
    }
}

module.exports = Cursed;
