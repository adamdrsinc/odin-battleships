import Gameboard from "./gameboard.js";
import PubSub from "pubsub-js";
import { PubSubMessage } from "./pubsub-messages.js";

export class Player {
    #board;
    #name;

    constructor(name, setupBoard) {
        this.#name = name;
        this.#board = new Gameboard(setupBoard);
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
