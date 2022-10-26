const Player = require('./player')
const Wolf = require('./wolf')
class werewolfgame{
    start() {
        const players = ["tu", "tri", "thong", "dung", "huy", "u" , "mai"];
        let length = players.length;
        const role = [];
        let werewolf = 0;
        for (let i = 0 ;i<length ;i++ ){
            const x=new Player();
            x.name=players[i];
            role.push(x);
        }
        while(werewolf < Math.floor(length/3)){
            const temp = Math.floor(Math.random()*6);
            if (role[temp].legit == true){
                const y=new Wolf();
                y.name=role[temp].name;
                role[temp]=y;
                werewolf++;
            }
        }
        for (let i = 0; i<length;i++){
            console.log(role[i].legit);
        }

    }



}
const play = new werewolfgame();
play.start();

module.exports = werewolfgame;
