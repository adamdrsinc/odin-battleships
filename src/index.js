import "./css/style.css";
import { GameHandler } from "./js/game-handler";
import { Player } from "./js/player";
import { UIHandler } from "./js/ui-handler";

function main() {
    UIHandler.init();
    const gameHandler = new GameHandler();
}

main();
