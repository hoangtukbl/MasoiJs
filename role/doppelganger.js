const Player = require('./player')
class Doppelganger extends Player {
    #targetcopy;
    constructor(user, id) {
        super(user, id);
        this.setLegit(true);
        this.setRole('doppelganger');
    }
    copy(idCopy){
        this.#targetcopy = idCopy;
        this.setRole(this.#targetcopy.getRole());
        this.setLegit(this.#targetcopy.getLegit());
    }
}
//copy role của người khác rồi trở thành theo phe giống như thế tăng sự tào lao của game
module.exports = Doppelganger;