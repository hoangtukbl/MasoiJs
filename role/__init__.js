const Bodyguard = require('./bodyguard');
const Seer = require('./seer');
const Villager = require('./villagers');
const Wolf = require('./wolf');


class Init {
    #listAttend = [];
    #listRole = ["bodyguard", "phuthuy", "soi1", "soi2", "dan1", "dan2",
        "banlang", "hunter", "truonglang", "soi3", "boi", "dan3"];
    #listPlayer = [];

    constructor(listPlayer) {
        this.setListPlayer(listPlayer);
    }

    setListPlayer(listAttend) {
        this.#listAttend = listAttend;
    }

    getListPlayer() {
        return this.#listPlayer;
    }

    setRole() {
        const temp = [];
        for (let i = 0; i < this.#listAttend.length; ++i) {
            temp.push(i);
        }
        this.#listAttend.forEach((each) => {
            let key = Math.floor(Math.random() * this.#listAttend.length);
            temp.splice(key, 1);
            if (this.#listRole[key] === 'bodyguard') {
                this.#listPlayer.push(new Bodyguard(each.name, each.id));
            } else {
                this.#listPlayer.push(new Villager(each.name, each.id));
            }
        })
    }
}

module.exports = Init;
