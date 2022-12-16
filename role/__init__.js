const Bodyguard = require('./bodyguard');
const Seer = require('./seer');
const Villager = require('./villagers');
const Witch = require('./witch');
const Wolf = require('./wolf');

class Init {
    #listAttend = [];
    #listRole = ["bodyguard", "witch", "wolf", "wolf", "village", "village",
        "cursed", "hunter", "mayor", "wolf", "diviner", "village"];
    #listPlayer = [];

    constructor(listPlayer) {
        this.setListPlayer(listPlayer);
        this.setRole();
    }

    setListPlayer(listAttend) {
        this.#listAttend = listAttend;
    }

    getListPlayer() {
        this.#listPlayer.forEach(each => {
            console.log(each.getName(),
                each.getId(),
                each.getLegit(),
                each.getRole(),
                each.getState())
        })
        return this.#listPlayer;
    }

    setRole() {
        this.#listAttend.sort(() => Math.random() - 0.5);
        this.#listAttend.forEach((each, key) => {
            switch (this.#listRole[key]) {
                case 'village':
                    this.#listPlayer.push(new Villager(each.name, each.id));
                    break;
                case "bodyguard":
                    this.#listPlayer.push(new Bodyguard(each.name, each.id));
                    break;
                case 'wolf':
                    this.#listPlayer.push(new Wolf(each.name, each.id));
                    break;
                case 'seer':
                    this.#listPlayer.push(new Seer(each.name, each.id));
                    break;
                case 'witch':
                    this.#listPlayer.push(new Witch(each.name, each.id));
                    break;
            }
        })
    }

    getPlayerLife() {
        const data = this.#listPlayer.filter(each => each.getState())
        return data;
    }

    handleKill(idPlayer){
        this.#listPlayer.forEach(each => {
            const t = each.getId();
            if(t == idPlayer){
                each.setState(false);
            }
        })
    }
}

module.exports = Init;
