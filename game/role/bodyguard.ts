import Player from "./player";

class Bodyguard extends Player {
    private idProtected: any;

    constructor(name: any, id: any) {
        super(name, id, 'bodyguard', true);
    }

    protect(idProtected: any) {
        if (idProtected == this.idProtected) {
            return false;
        }
        else {
            this.setProtected(idProtected);
            return true;
        }
    }

    setProtected(idProtected: any) {
        this.idProtected = idProtected;
    }
}

module.exports = Bodyguard;
