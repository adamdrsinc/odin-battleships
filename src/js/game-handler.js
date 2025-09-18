import * as MathSupport from "./math-support.js";
import { Player } from "./player";
import { PubSubMessage } from "./pubsub-messages";

export class GameHandler {
    #player1 = new Player("Player");
    #player2 = new Player("Computer");

    constructor() {
        this.#addSubscribers();
    }

    get player() {
        return this.#player1;
    }

    get computer() {
        return this.#player2;
    }

    get players() {
        return [this.#player1, this.#player2];
    }

    #addSubscribers() {
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

    #computerTurn() {
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

    #publishTileColorChange(potentialShip, x, y, playerName) {
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

    #checkGameWin() {
        const allComputerShipsDead = this.#shipsDead(this.computer.board.ships);
        

        const allPlayerShipsDead = this.#shipsDead(this.player.board.ships);
    }

    #shipsDead(ships) {
        for (const ship of ships) {
            if (!ship.isSunk()) return false;
        }

        return true;
    }
}
