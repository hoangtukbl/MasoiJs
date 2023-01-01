class Player {
    #state;
    #user;
    #id;
    #legit;
    #role;
    constructor(user, id, legit, role) {
        this.#state = true;
        this.#user = user;
        this.#id = id;
        this.#legit = legit;
        this.#role = role;
    }

    getName() {
        return this.#user;
    }
    setName(user) {
        this.#user = user;
    }

    getId() {
        return this.#id
    }
    setID(id) {
        this.#id = id;
    }

    setState(state) {
        this.#state = state;
    }
    getState() {
        return this.#state;
    }

    getRole() {
        return this.#role;
    }
    setRole(role) {
        this.#role = role;
    }

    setLegit(legit) {
        this.#legit = legit;
    }
    getLegit() {
        return this.#legit;
    }

    // General method
    vote(id) {
        if (this.#state === true) {
            return id;
        }
    }
}

module.exports = Player;