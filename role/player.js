class Player {
    #state;
    #name;
    #id;
    #legit;
    #role;
    constructor(name, id, legit, role) {
        this.#state = true;
        this.#name = name;
        this.#id = id;
        this.#legit = legit;
        this.#role = role;
    }

    getName() {
        return this.#name;
    }

    setName(name) {
        this.#name = name;
    }

    getId() {
        return this.#id
    }

    setID(id){
        this.#id = id;
    }

    vote(id) {
        if (this.#state === true) {
            return id;
        }
    }

    setState(){
        this.#state = !this.state;
    }

    setRole(role){
        this.#role = role;
    }

    setLegit(legit){
        this.#legit = legit;
    }

    getLegit(){
        return this.#legit;
    }

    getRole(){
        return this.#role;
    }

    getState(){
        return this.#state;
    }
}

module.exports = Player;
