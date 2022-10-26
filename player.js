class Player {
    name;
    id;
    legit = true;
    dead = false;
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    sendText() {
        if (this.dead == false) {
            return;
        }
    }
    getId() {
        return this.id
    }
    vote(id) {
        if (this.dead == false) {
            return id;
        }
    }
}
module.exports = Player;
// const x = new Player();
// console.log(x.name);
// x.setName("Tu");
// console.log(x.getName());
// x.id = 1234;
// const y = new Player();
// y.setName("AhTu");
// y.id = 4567
// temp = x.vote(4567);
// if (y.getId() == temp) {
//     console.log(y.getName());
// }
// module.exports = Player