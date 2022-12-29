const Player = require('./role/player')
const Wolf = require('./role/wolf')

class werewolfgame {
    start() {
        const player_name = ["tu", "tri", "thong", "dung", "mai", "huy"];
        let length = player_name.length;
        const role = [];
        let werewolf = 0;
        for (let i = 0; i < length; i++) {
            const x = new Player();
            x.name = player_name[i];
            role.push(x);
        }
        while (werewolf < Math.floor(length / 3)) {
            const temp = Math.floor(Math.random() * 6);
            if (role[temp].legit == true) {
                const y = new Wolf();
                y.name = role[temp].name;
                role[temp] = y;
                werewolf++;
            }
        }
        for (let i = 0; i < length; i++) {
            console.log(role[i].legit);
        }
        for (let i = 0; i < length; i++) {
            if (role[i].legit == false)
                console.log(role[i].name);
        }
    }

}
const play = new werewolfgame();
play.start();

module.exports = werewolfgame;
