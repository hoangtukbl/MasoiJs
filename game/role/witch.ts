import Player from "./player";

class Witch extends Player {
    private resurrection: 1 | 0 = 1;
    private poison: 1 | 0 = 1;

    constructor(user: object[], id: string) {
        super(user, id, 'witch', true);
    }

    resurrect(idDead: any) {
        if (this.resurrection) {

        }
    }

    empoison(idPlayer: any) {

    }
}

module.exports = Witch;
