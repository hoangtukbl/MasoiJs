const player = require('./player')
class Cursed extends player {
    constructor(name, id) {
        super(name, id);
        this.setLegit(true);
        this.setRole('cursed');
    }

    convert(){
        this.setRole('wolf');
        this.setLegit(false);
    }
}

module.exports = Cursed;
