import Player from "./player";

class Seer extends Player {
    constructor(name: any, id: any) {
        super(name, id, 'seer', true);
    }
}

module.exports = Seer;
