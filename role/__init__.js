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
    #queueKill = [];
    #queueRev = [];

    constructor(listPlayer) {
        this.setListPlayer(listPlayer);
        this.setRole();
    }

    setListPlayer(listAttend) {
        this.#listAttend = listAttend;
    }

    getListPlayer() {
        // this.#listPlayer.forEach(each => {
        //     console.log(each.getName(),
        //         each.getId(),
        //         each.getLegit(),
        //         each.getRole(),
        //         each.getState())
        // })
        return this.#listPlayer;
    }

    getPlayerLife() {
        const data = this.#listPlayer.filter(each => each.getState())
        return data;
    }

    addToQueueKill(idPlayer){
        this.#queueKill.push(idPlayer);
    }

    addToQueueRev(idPlayer){
        this.#queueRev.push(idPlayer);
    }

    handleKill() {
        this.#queueKill.forEach(j => {
            this.#listPlayer.forEach(k => {
                if(j.getId() === k.getId()){
                    k.setState(false);
                }
            })
        })
    }

    handleRev() {
        this.#queueRev.forEach(j => {
            this.#listPlayer.forEach(k => {
                if(j.getId() === k.getId()){
                    k.setState(true);
                }
            })
        })
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

    countGood(){
        let quan = 0;
        this.#listPlayer.forEach(each => {
            if(each.getLegit()){
                quan++;
            }
        })
        return quan;
    }

    countEvil(){
        let quan = 0;
        this.#listPlayer.forEach(each => {
            if(!each.getLegit()){
                quan++;
            }
        })
        return quan;
    }

    checkFinish(){
        return this.countEvil() >= this.countGood();
    }

    start(){
        while (this.checkFinish()){
            const players = this.#listPlayer;
            console.log("Bạn muốn chọn ai để bảo vệ đêm nay: ")
            let a = 1;
            if(players[0].getState()){
                players[0].protect(a);
            }
        }
    }
}

module.exports = Init;
