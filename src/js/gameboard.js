export default class Gameboard {
    #board = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];

    constructor() {}

    //Ship: 5
    //Ship: 4
    //Ship: 4
    //Ship: 3
    //Ship: 2

    addShip(ship, vertical, startLocation) {
        const shipLength = ship.length;

        for (let i = 0; i < shipLength; i++) {
            if (vertical) {
                this.#board[startLocation.y + i][startLocation.x] = ship;
            } else {
                this.#board[startLocation.y][startLocation.x + i] = ship;
            }
        }
    }

    get board() {
        return this.#board;
    }

    getBoardLocation(coords) {
        return this.board[coords.y][coords.x];
    }

}
