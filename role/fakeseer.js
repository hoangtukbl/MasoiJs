const Player = require('./player')
class FakeSeer extends Player {
    constructor(user, id) {
        super(user, id);
        this.setLegit(true);
        this.setRole('Fakeseer');
    }
    // có thể soi như realseer nhưng trả ra giá trị random, tham khảo theFool werewoflboardgame
}

module.exports = FakeSeer;