import "./css/style.css";
import { Player } from "./js/player";
import { UIHandler } from "./js/ui-handler";

function main() {
    const player = new Player("Player");
    const computer = new Player("Computer");

    UIHandler.init();
}

main();
