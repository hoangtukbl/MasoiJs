import Player from "./player";

class Villagers extends Player {
    constructor(user: object[], id: string) {
        super(user, id, 'villager', true);
    }
}

module.exports = Villagers;
