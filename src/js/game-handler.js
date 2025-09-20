import * as MathSupport from "./math-support.js";
import { Player } from "./player";
import { PubSubMessage } from "./pubsub-messages";
import Ship from "./ship.js";

export class GameHandler {
    static #player1 = new Player("Player");
    static #player2 = new Player("Computer");
    static #shipsToPlace = [
        new Ship(5),
        new Ship(4),
        new Ship(3),
        new Ship(3),
        new Ship(2),
    ];

    static init() {
        this.#addSubscribers();
    }

    static get player() {
        return this.#player1;
    }

    static get computer() {
        return this.#player2;
    }

    static get players() {
        return [this.#player1, this.#player2];
    }

    static get shipsToPlace() {
        return this.#shipsToPlace;
    }

    static removeShipToPlace() {
        if (this.#shipsToPlace.length > 0) {
            this.#shipsToPlace.shift();
        }
    }

    static #addSubscribers() {
        PubSub.subscribe(PubSubMessage.TILE_CLICKED, (message, data) => {
            const x = data.x;
            const y = data.y;
            const playerName = data.playerName;

            const player = this.players.find(
                (player) => player.name === playerName
            );

            const potentialShip = player.board.getBoardLocation({ x, y });
            if (potentialShip === 1) return;

            this.#publishTileColorChange(potentialShip, x, y, playerName);

            player.board.addShot({ x, y });

            if (playerName === "Computer") this.#computerTurn();
        });
    }

    static #computerTurn() {
        let goodTurn = false;
        while (!goodTurn) {
            const coords = {
                x: MathSupport.getRandomInt(9),
                y: MathSupport.getRandomInt(9),
            };

            const playerBoardSpot = this.player.board.getBoardLocation(coords);

            if (playerBoardSpot !== 1) {
                PubSub.publish(PubSubMessage.TILE_CLICKED, {
                    x: coords.x,
                    y: coords.y,
                    playerName: "Player",
                });
                goodTurn = true;
            }
        }
    }

    static #publishTileColorChange(potentialShip, x, y, playerName) {
        if (potentialShip === 0) {
            // "Water"
            PubSub.publish(PubSubMessage.TILE_CLICKED_COLOR_CHANGE, {
                x,
                y,
                hitStatus: "MISS",
                playerName,
            });
        } else {
            // Ship

            potentialShip.hit();
            PubSub.publish(PubSubMessage.TILE_CLICKED_COLOR_CHANGE, {
                x,
                y,
                hitStatus: "HIT",
                playerName,
            });

            this.#checkGameWin();
        }
    }

    static #checkGameWin() {
        const allComputerShipsDead = this.#shipsDead(this.computer.board.ships);
        if (allComputerShipsDead) {
            this.#displayWin("Player");
            return;
        }

        const allPlayerShipsDead = this.#shipsDead(this.player.board.ships);
        if (allPlayerShipsDead) {
            this.#displayWin("Computer");
        }
    }

    static #displayWin(playerName) {
        document.getElementById("player-win-name").innerText = playerName;
        document
            .getElementById("person-wins-container")
            .classList.toggle("visible");
    }

    static #shipsDead(ships) {
        for (const ship of ships) {
            if (!ship.isSunk()) return false;
        }

        return true;
    }
}
