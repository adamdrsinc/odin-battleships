import * as MathSupport from "./math-support.js";
import { Player } from "./player";
import { PubSubMessage } from "./pubsub-messages";
import Ship from "./ship.js";

export class GameHandler {
    static #player = new Player("Player", false);
    static #computer = new Player("Computer", true);
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

    static reset() {
        document
            .getElementById("person-wins-container")
            .classList.toggle("visible");
    }

    static get player() {
        return this.#player;
    }

    static get computer() {
        return this.#computer;
    }

    static get players() {
        return [this.#player, this.#computer];
    }

    static #removeShipToPlace() {
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

        PubSub.subscribe(PubSubMessage.START_TILE_CLICKED, (message, data) => {
            const startingBoard = document.getElementById("selection-grid");

            if (this.#shipsToPlace.length > 0) {
                const ship = this.#shipsToPlace[0];
                const isVertical =
                    document.getElementById("vertical-checkbox").checked;

                //TODO: Check for good placement: checkPlacement();

                //Set tile colours to be green
                if (isVertical) {
                    for (let i = 0; i < ship.length; i++) {
                        startingBoard
                            .querySelector(
                                `[data-x="${data.x}"][data-y="${data.y + i}"]`
                            )
                            .classList.add("set-color");
                    }
                } else {
                    for (let i = 0; i < ship.length; i++) {
                        startingBoard
                            .querySelector(
                                `[data-x="${data.x + i}"][data-y="${data.y}"]`
                            )
                            .classList.add("set-color");
                    }
                }

                //Set tile on gameboard
                this.#player.board.addShipToBoard(ship, isVertical, {
                    x: data.x,
                    y: data.y,
                });

                //Add to list of ships
                this.#player.board.addShip(ship);

                //Remove ship
                this.#removeShipToPlace();

                //TODO: move to UI-Handler
                const allNotDone = document.querySelectorAll(`[done="false"]`);

                allNotDone[0].setAttribute("done", "true");
                allNotDone[0].classList.add("done");
            }
        });

        PubSub.subscribe(
            PubSubMessage.START_TILE_MOUSE_OVER,
            (message, data) => {
                if (this.#shipsToPlace.length !== 0) {
                    const ship = GameHandler.#shipsToPlace[0];
                    const startingBoard =
                        document.getElementById("selection-grid");

                    const highlightedTiles =
                        startingBoard.getElementsByClassName("starting-hover");
                    while (highlightedTiles.length > 0) {
                        highlightedTiles[0].classList.remove("starting-hover");
                    }

                    if (data.isVertical) {
                        for (let i = 0; i < ship.length; i++) {
                            const tempTile = startingBoard.querySelector(
                                `[data-x="${data.x}"][data-y="${data.y + i}"]`
                            );

                            if (tempTile) {
                                tempTile.classList.add("starting-hover");
                            }
                        }
                    } else {
                        //Horizontal
                        for (let i = 0; i < ship.length; i++) {
                            const tempTile = startingBoard.querySelector(
                                `[data-x="${data.x + i}"][data-y="${data.y}"]`
                            );

                            if (tempTile) {
                                tempTile.classList.add("starting-hover");
                            }
                        }
                    }
                }
            }
        );
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
