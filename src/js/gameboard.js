import { coinFlip, getRandomInt } from "./math-support.js";
import Ship from "./ship.js";

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

    #ships = [];

    constructor(setupBoard) {
        if (setupBoard) {
            this.#ships = [
                new Ship(5),
                new Ship(4),
                new Ship(3),
                new Ship(3),
                new Ship(2),
            ];
            for (const ship of this.#ships) {
                this.#attemptToAddShip(ship);
            }
        } 
    }

    #attemptToAddShip(ship) {
        let isVertical;
        let goodLocationFound = false;
        let randomXAxisLocation;
        let randomYAxisLocation;

        while (!goodLocationFound) {
            isVertical = !!coinFlip();
            randomXAxisLocation =
                isVertical === false
                    ? getRandomInt(this.board.length - ship.length)
                    : getRandomInt(this.board.length);
            randomYAxisLocation = isVertical
                ? getRandomInt(this.board.length - ship.length)
                : getRandomInt(this.board.length);

            if (isVertical) {
                for (let i = 0; i < ship.length; i++) {
                    if (
                        !this.isValidLocation({
                            y: randomYAxisLocation + i,
                            x: randomXAxisLocation,
                        })
                    ) {
                        break;
                    } else if (i === ship.length - 1) {
                        // Reached end of for loop
                        goodLocationFound = true;
                    }
                }
            } else {
                for (let i = 0; i < ship.length; i++) {
                    if (
                        !this.isValidLocation({
                            y: randomYAxisLocation,
                            x: randomXAxisLocation + i,
                        })
                    ) {
                        break;
                    } else if (i === ship.length - 1) {
                        // Reached end of for loop
                        goodLocationFound = true;
                    }
                }
            }
        }

        this.addShip(ship, isVertical, {
            x: randomXAxisLocation,
            y: randomYAxisLocation,
        });
    }

    addShip(ship, vertical, startLocation) {
        const shipLength = ship.length;

        for (let i = 0; i < shipLength; i++) {
            if (vertical) {
                this.setBoardLocation(
                    { y: startLocation.y + i, x: startLocation.x },
                    ship
                );
            } else {
                this.setBoardLocation(
                    { y: startLocation.y, x: startLocation.x + i },
                    ship
                );
            }
        }
    }

    addShot(coords) {
        this.setBoardLocation(coords, 1);
    }

    get board() {
        return this.#board;
    }

    get ships() {
        return this.#ships;
    }

    getBoardLocation(coords) {
        return this.board[coords.y][coords.x];
    }

    setBoardLocation(coords, val) {
        this.board[coords.y][coords.x] = val;
    }

    isValidLocation(coords) {
        return this.getBoardLocation(coords) === 0;
    }
}
