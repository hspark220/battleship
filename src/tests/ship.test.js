import Ship from '../ship.js';

const ship1 = Ship(5);
const ship2 = Ship(2);
const badShip = Ship('length');

//testing ship properties
test('ship property (length = 5)', () => {
    expect(ship1.length).toBe(5);
});
test('ship property (length = 3)', () => {
    expect(ship2.length).toBe(2);
});
test('ship property (hits = 0)', () => {
    expect(ship1.getHits()).toBe(0);
});
test('ship property (hits = 3)', () => {
    expect(ship2.getHits()).toBe(0);
});

//testing for bad properties
test('ship bad property (returns null)', () => {
    expect(badShip).toBe(null)
});

//testing hit()

test('running hit() for ship1', () => {
    expect(ship1.hit()).toBe();
})
test('running hit() for ship2', () => {
    expect(ship2.hit()).toBe();
});
test('running hit() for ship2', () => {
    expect(ship2.hit()).toBe();
});
test('ship1 hit*1 => hits = 1', () => {
    expect(ship1.getHits()).toBe(1);
})
test('ship2 hit*2 => hits = 2', () => {
    expect(ship2.getHits()).toBe(2);
});
test('hitting ship more than length', () => {
    expect(ship2.hit()).toBe('cannot hit a sunk ship');
})

//testing sunk
test('isSunk (false for ship1)', () => {
    expect(ship1.isSunk()).toBe(false);
})
test('isSunk (true for ship2)', ()=> {
    expect(ship2.isSunk()).toBe(true);
})

