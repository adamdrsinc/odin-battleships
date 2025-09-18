export class UIHandler {
    static init() {
        this.#populateBoards();
    }

    static #populateBoards() {
        const playerBoard =
            document.getElementsByClassName("game-grid player")[0];
        const computerBoard =
            document.getElementsByClassName("game-grid computer")[0];

        console.log(playerBoard);
        this.#populateBoard(playerBoard);
        this.#populateBoard(computerBoard);
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

            newTile.addEventListener("click", this.#tileClicked);

            personGameGrid.appendChild(newTile);
        }
    }

    static #tileClicked(event) {
        const clickedElement = event.target;

        const xCoord = clickedElement.getAttribute("data-x");
        const yCoord = clickedElement.getAttribute("data-y");
    }
}
