class Player {
    private state: boolean;
    private user: object[];
    private id: string;
    private legit: boolean;
    private role: string;

    constructor(user: object[], id: string, role: string, legit: boolean) {
        this.state = true;
        this.user = user;
        this.id = id;
        this.legit = legit;
        this.role = role;
    }

    getName(): any {
        return this.user;
    }

    setName(user: object[]) {
        this.user = user;
    }

    getId(): string {
        return this.id;
    }

    setID(id: string) {
        this.id = id;
    }

    setState(state: boolean) {
        this.state = state;
    }

    getState(): boolean {
        return this.state;
    }

    getRole(): string {
        return this.role;
    }

    setRole(role: string) {
        this.role = role;
    }

    setLegit(legit: boolean) {
        this.legit = legit;
    }

    getLegit(): boolean {
        return this.legit;
    }

    vote(id: string) {
        if (this.state === true) {
            return id;
        }
    }
}

export default Player;
