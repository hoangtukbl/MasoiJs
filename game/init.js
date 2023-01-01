const Player = require("./role/player");
const Seer = require("./role/seer");
const Villagers = require("./role/villagers");
const Wolf = require("./role/wolf");

class Init {
    constructor(numbersPlayer) {
        this.numbersPlayer = [];
    }

    display() {
        return this.numbersPlayer;
    }
}

const a = new Init(2);
// console.log(a.display());

// const role = [new Player, new Seer, new Villagers, new Wolf];

// console.log(role);
