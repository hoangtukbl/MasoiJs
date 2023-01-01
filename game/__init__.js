const Bodyguard = require('./role/bodyguard');
const Seer = require('./role/seer');
const Villager = require('./role/villagers');
const Witch = require('./role/witch');
const Wolf = require('./role/wolf');

class Init {
    #listAttend = [];
    #listRole = ["bodyguard", "witch", "wolf", "wolf", "village", "village",
        "cursed", "hunter", "mayor", "wolf", "diviner", "village"];
    #listPlayer = [];
    #queueKill = [];
    #queueRev = [];
    bot;

    constructor(listPlayer, bot) {
        this.setListPlayer(listPlayer);
        this.bot = bot;
    }

    setListPlayer(listAttend) {
        this.#listAttend = listAttend;
    }

    command = async () => {
        await this.bot.reply("Hello, tui guiwr tu ma soi");
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
    setRole = async () => {
        this.#listAttend.sort(() => Math.random() - 0.5);
        for (let i = 0; i<this.#listAttend.length; i++) {
            const each = this.#listRole[i];
            const player = this.#listAttend[i];
            switch (each) {
                case 'witch':
                    this.#listPlayer.push(await new Witch(player.name, player.id));
                    break;
                case 'village':
                    this.#listPlayer.push(await new Villager(player.name, player.id));
                    break;
                case "bodyguard":
                    this.#listPlayer.push(await new Bodyguard(player.name, player.id));
                    break;
                case 'wolf':
                    this.#listPlayer.push(await new Wolf(player.name, player.id));
                    break;
                case 'seer':
                    this.#listPlayer.push(await new Seer(player.name, player.id));
                    break;
            }
        }
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

    getListPlayerss = async () => {
        let a = '';
        this.#listPlayer.forEach(each => {
            a+=each.getName().username + ", role =" + each.getRole() + "\n";
        })
        this.bot.channel.send(a);
    }
}

module.exports = Init;
