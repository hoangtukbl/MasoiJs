const player1 = require('./player')
class Seer extends player1 {
    getRole(someone) {
        if (someone.legit == false)
            console.log("wolf");
        else
            console.log("villager");
    }
}
module.exports = Villagers;