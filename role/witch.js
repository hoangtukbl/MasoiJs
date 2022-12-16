const player = require('./player')
class Witch extends player {
    constructor(name, id) {
        super(name, id);
        this.setLegit(true);
        this.setRole('witch');
    }
}

module.exports = Witch;
