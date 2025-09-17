export default class Ship {
    #hits = 0;
    #length = 0;

    constructor(length) {
        this.#length = length;
    }

    hit() {
        if (this.isSunk()) return;
        this.#hits++;
    }

    get hits() {
        return this.#hits;
    }

    get length() {
        return this.#length;
    }

    isSunk() {
        return this.#hits === this.#length;
    }
}
