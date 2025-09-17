import Gameboard from "../js/gameboard.js";
import Ship from "../js/ship.js";

test("addShip of length 3 to coords [0,0], is vertical", () => {
    const shipLength3 = new Ship(3);
    const gameboard = new Gameboard();

    gameboard.addShip(shipLength3, true, { x: 0, y: 0 });

    expect(gameboard.getBoardLocation({ x: 0, y: 0 })).toBe(shipLength3);
    expect(gameboard.getBoardLocation({ x: 0, y: 1 })).toBe(shipLength3);
    expect(gameboard.getBoardLocation({ x: 0, y: 2 })).toBe(shipLength3);
});

test("addShip of length 3 to coords [0,0], is horizontal", () => {
    const shipLength3 = new Ship(3);
    const gameboard = new Gameboard();

    gameboard.addShip(shipLength3, false, { x: 0, y: 0 });

    expect(gameboard.getBoardLocation({ x: 0, y: 0 })).toBe(shipLength3);
    expect(gameboard.getBoardLocation({ x: 1, y: 0 })).toBe(shipLength3);
    expect(gameboard.getBoardLocation({ x: 2, y: 0 })).toBe(shipLength3);
});

test("addShip of length 3 to coords [3,4], is vertical", () => {
    const shipLength3 = new Ship(3);
    const gameboard = new Gameboard();

    gameboard.addShip(shipLength3, true, { x: 3, y: 4 });

    expect(gameboard.getBoardLocation({ x: 3, y: 4 })).toBe(shipLength3);
    expect(gameboard.getBoardLocation({ x: 3, y: 5 })).toBe(shipLength3);
    expect(gameboard.getBoardLocation({ x: 3, y: 6 })).toBe(shipLength3);
});
