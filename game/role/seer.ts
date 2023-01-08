import Player from "./player";

class Seer extends Player {
    constructor(user: object[], id: string) {
        super(user, id, 'seer', true);
    }
}

module.exports = Seer;
