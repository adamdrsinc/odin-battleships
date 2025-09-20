import "./css/style.css";
import { GameHandler } from "./js/game-handler";
import { PubSubMessage } from "./js/pubsub-messages";
import { UIHandler } from "./js/ui-handler";

function main() {
    UIHandler.init();
    GameHandler.init();

    PubSub.subscribe(PubSubMessage.PLAY_AGAIN, (message, data) => {
        GameHandler.reset();
        UIHandler.reset();

        UIHandler.init();
    });
}

main();
