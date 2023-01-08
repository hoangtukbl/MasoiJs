import Player from "./player";

class Villagers extends Player {
    constructor(name: any, id: any) {
        super(name, id, 'villager', true);
    }
}

module.exports = Villagers;
