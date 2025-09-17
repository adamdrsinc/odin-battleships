import Ship from "../js/ship.js";

test("hit() increments #hits by 1", () => {
    const ship = new Ship(3);
    expect(ship.hits).toBe(0);
    ship.hit();
    expect(ship.hits).toBe(1);
});

test("get length", () => {
    const ship = new Ship(3);
    expect(ship.length).toBe(3);
});

test("isSunk returns true when hits === length", () => {
    const ship = new Ship(2);
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
});

test("isSunk returns false when hits !== length", () => {
    const ship = new Ship(2);
    ship.hit();
    expect(ship.isSunk()).toBe(false);
});
