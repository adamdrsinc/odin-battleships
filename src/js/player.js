import Gameboard from "./gameboard.js";

export class Player {
    #board;
    #name;

    constructor(name) {
        this.#name = name;
        this.#board = new Gameboard();
    }

    get name() {
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }

    get board() {
        return this.#board;
    }
}
