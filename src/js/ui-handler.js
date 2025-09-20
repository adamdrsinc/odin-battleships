import PubSub from "pubsub-js";
import { PubSubMessage } from "./pubsub-messages";
import { GameHandler } from "./game-handler";

export class UIHandler {
    static init() {
        this.#populateBoards();
        this.#addSubscribers();
        this.#addEventListeners();
    }

    static #populateBoards() {
        const playerBoard = document.querySelector(
            `[data-player-name="Player"]`
        );
        const computerBoard = document.querySelector(
            `[data-player-name="Computer"]`
        );
        const startingBoard = document.getElementById("selection-grid");

        this.#populateBoard(playerBoard);
        this.#populateBoard(computerBoard);

        this.#populateBoard(startingBoard);
        this.#addStartingBoardMouseOvers(startingBoard);
    }

    static #addStartingBoardMouseOvers(startingBoard) {
        const children = startingBoard.childNodes;
        const hoveredOverTiles = [];

        for (const tile of children) {
            tile.addEventListener("mouseenter", (e) => {
                const tile = e.target;
                const x = parseInt(tile.getAttribute("data-x"));
                const y = parseInt(tile.getAttribute("data-y"));
                const isVertical =
                    document.getElementById("vertical-checkbox").checked;

                if (GameHandler.shipsToPlace.length !== 0) {
                    const ship = GameHandler.shipsToPlace[0];
                    const shipLength = ship.length;

                    if (isVertical) {
                        for (let i = 0; i < shipLength; i++) {
                            const tempTile = startingBoard.querySelector(
                                `[data-x="${x}"][data-y="${y + i}"]`
                            );

                            if (tempTile) {
                                tempTile.classList.add("starting-hover");
                                hoveredOverTiles.push(tempTile);
                            }
                        }
                    } else {
                        //Horizontal
                        for (let i = 0; i < shipLength; i++) {
                            const tempTile = startingBoard.querySelector(
                                `[data-x="${x + i}"][data-y="${y}"]`
                            );

                            if (tempTile) {
                                tempTile.classList.add("starting-hover");
                                hoveredOverTiles.push(tempTile);
                            }
                        }
                    }
                }
            });

            tile.addEventListener("mouseleave", (e) => {
                while (hoveredOverTiles.length > 0) {
                    hoveredOverTiles[0].classList.toggle("starting-hover");
                    hoveredOverTiles.shift();
                }
            });
        }
    }

    static #populateBoard(personGameGrid) {
        for (let i = 0; i < 100; i++) {
            const xCoord = i % 10;
            const yCoord = Math.floor(i / 10);

            const newTile = document.createElement("div");
            newTile.className = "tile";
            newTile.innerHTML = `&nbsp;`;
            newTile.setAttribute("data-x", xCoord);
            newTile.setAttribute("data-y", yCoord);

            personGameGrid.appendChild(newTile);
        }
    }

    static #tileClicked(event) {
        const clickedElement = event.target;
        const gameGrid = clickedElement.parentNode;
        const playerName = gameGrid.getAttribute("data-player-name");

        const x = clickedElement.getAttribute("data-x");
        const y = clickedElement.getAttribute("data-y");

        PubSub.publish(PubSubMessage.TILE_CLICKED, {
            x,
            y,
            playerName,
        });
    }

    static #addSubscribers() {
        PubSub.subscribe(
            PubSubMessage.TILE_CLICKED_COLOR_CHANGE,
            (message, data) => {
                const x = data.x;
                const y = data.y;
                const playerName = data.playerName;
                const hitStatus = data.hitStatus;

                this.#changeTileColor(playerName, hitStatus, { x, y });
            }
        );
    }

    static #addEventListeners() {
        const button = document.getElementById("button-play-again");
        button.addEventListener("submit", (event) => {
            event.preventDefault();

            PubSub.publish(PubSubMessage.PLAY_AGAIN, {});
        });

        const computerGameGrid = document.querySelector(
            `[data-player-name="Computer"]`
        );
        const computerTiles = computerGameGrid.childNodes;
        for (const tile of computerTiles) {
            tile.addEventListener("click", this.#tileClicked);
        }
    }

    static #changeTileColor(playerName, hitStatus, coords) {
        const personsGrid = document.querySelector(
            `[data-player-name="${playerName}"]`
        );

        const tile = personsGrid.querySelector(
            `[data-x="${coords.x}"][data-y="${coords.y}"]`
        );

        if (hitStatus === "HIT") {
            tile.classList.add("hit");
        } else {
            tile.classList.add("miss");
        }
    }
}
