class Player {
    private state: any;
    private name: object[];
    private id: string;
    private legit: any;
    private role: any;
    constructor(name: object[], id: string, legit: any, role: any) {
        this.state = true;
        this.name = name;
        this.id = id;
        this.legit = legit;
        this.role = role;
    }

    getName():any {
        return this.name;
    }
    setName(name: any) {
        this.name = name;
    }

    getId(): any {
        return this.id
    }
    setID(id: any) {
        this.id = id;
    }

    setState(state: any) {
        this.state = state;
    }
    getState(): boolean | any {
        return this.state;
    }

    getRole(): any {
        return this.role;
    }
    setRole(role: any) {
        this.role = role;
    }

    setLegit(legit: any) {
        this.legit = legit;
    }
    getLegit(): any {
        return this.legit;
    }

    vote(id: any) {
        if (this.state === true) {
            return id;
        }
    }
}

export default Player;
