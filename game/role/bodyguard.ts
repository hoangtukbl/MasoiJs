import Player from "./player";

class Bodyguard extends Player {
    private idProtected: string | null;

    constructor(user: object[], id: string) {
        super(user, id, 'bodyguard', true);
        this.idProtected = null;
    }

    protect(idProtected: string): boolean {
        if (idProtected == this.idProtected) {
            return false;
        } else {
            this.setProtected(idProtected);
            return true;
        }
    }

    setProtected(idProtected: string) {
        this.idProtected = idProtected;
    }
}

module.exports = Bodyguard;
