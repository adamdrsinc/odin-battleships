import PubSub from "pubsub-js";
import { PubSubMessage } from "./pubsub-messages";

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

        this.#populateBoard(playerBoard, false);
        this.#populateBoard(computerBoard, true);
    }

    static #populateBoard(personGameGrid, canClickBoard) {
        for (let i = 0; i < 100; i++) {
            const xCoord = i % 10;
            const yCoord = Math.floor(i / 10);

            const newTile = document.createElement("div");
            newTile.className = "tile";
            newTile.innerHTML = `&nbsp;`;
            newTile.setAttribute("data-x", xCoord);
            newTile.setAttribute("data-y", yCoord);

            if (canClickBoard) {
                newTile.addEventListener("click", this.#tileClicked);
            }

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
