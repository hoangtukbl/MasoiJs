import Player from "./player";

class Witch extends Player {
    private resurrection: any = 1;
    private poison: any = 1;
    constructor(name: object[], id: string) {
        super(name, id, 'witch', true);
    }

    resurrect(idDead: any) {
        if (this.resurrection) {

        }
    }

    empoison(idPlayer: any) {

    }
}

module.exports = Witch;
