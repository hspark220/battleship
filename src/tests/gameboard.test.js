import Gameboard from '../gameboard.js';

const gameboard = Gameboard();

//testing board
test('board should be a 2d array', () => {
    expect(gameboard.board).toStrictEqual([
        [null, null, null, null, null,null, null, null, null, null],
        [null, null, null, null, null,null, null, null, null, null],
        [null, null, null, null, null,null, null, null, null, null],
        [null, null, null, null, null,null, null, null, null, null],
        [null, null, null, null, null,null, null, null, null, null],
        [null, null, null, null, null,null, null, null, null, null],
        [null, null, null, null, null,null, null, null, null, null],
        [null, null, null, null, null,null, null, null, null, null],
        [null, null, null, null, null,null, null, null, null, null],
        [null, null, null, null, null,null, null, null, null, null],
        [null, null, null, null, null,null, null, null, null, null]
    ]);
});

//testing placeShip
test('Gameboard placing ship (should not return anything)', () => {
    expect(gameboard.placeShip(2,2,4,'x')).toBe();
});
//x direciton
test('length of ship should be equal to 4 at [2][2]', () => {
    expect(gameboard.board[2][2].length).toBe(4);
});
test('[2][2] == [2][3]', () => {
    expect(gameboard.board[2][2]).toBe(gameboard.board[2][3]);
});
test('[2][2] == [2][4]', () => {
    expect(gameboard.board[2][2]).toBe(gameboard.board[2][3]);
});
test('[2][2] == [2][5]', () => {
    expect(gameboard.board[2][2]).toBe(gameboard.board[2][3]);
});

//y direction
test('Gameboard placing ship (should not return anything)', () => {
    expect(gameboard.placeShip(5,5,3,'y')).toBe();
});
test('length of ship should be equal to 3 at [5][5]', () => {
    expect(gameboard.board[5][5].length).toBe(3);
});
test('[5][5] == [6][5]', () => {
    expect(gameboard.board[5][5]).toBe(gameboard.board[6][5]);
});
test('[5][5] == [7][5]', () => {
    expect(gameboard.board[5][5]).toBe(gameboard.board[7][5]);
});

//invalid inputs
test('placing ships that will go over the board (returns null)', () => {
    expect(gameboard.placeShip(8,8,10,'x')).toBe(null);
});
test('placing ships in invalid locations (returns null)', () => {
    expect(gameboard.placeShip(-1,-1, 2, 'y')).toBe(null);
});
test('ship location is not a number (returns null', () => {
    expect(gameboard.placeShip('h','x',2, 'y')).toBe(null);
});
test('invalid direction for the ship', () => {
    expect(gameboard.placeShip(1,1,3, 'hello')).toBe(null);
});

//testing receiveAttack
test('testing for hit (should return Hit!)', () => {
    expect(gameboard.receiveAttack(2,2)).toBe('Hit!');
});
test('testing for hit (should change board to hit)', () => {
    expect(gameboard.board[2][2]).toBe('hit');
});
test('ship at the location should be hit', () => {
    expect(gameboard.board[2][3].getHits()).toBe(1);
});
test('testing for miss (should return Miss!)', () => {
    expect(gameboard.receiveAttack(1,1)).toBe('Miss!');
});
test('testing for miss (should change board to miss', () => {
    expect(gameboard.board[1][1]).toBe('miss');
});
test('if there is a miss or hit already on board (return null)', () => {
    expect(gameboard.receiveAttack(1,1)).toBe(null);
});
test('if it is a invalid locatoin (return null)', () => {
    expect(gameboard.receiveAttack(-1,-1)).toBe(null);
})
test('if location is not a number (return null)', () => {
    expect(gameboard.receiveAttack('hello','seattle')).toBe(null);
})

//testing if all ships are sunk
const gameboard2 = new Gameboard();
test('if all ship sank return true', () => {
    gameboard2.placeShip(0,0,1,'x')
    gameboard2.receiveAttack(0,0);
    expect(gameboard2.allShipSank()).toBe(true);
});
test('if not all ships sank, return false', () => {
    expect(gameboard.allShipSank()).toBe(false);
});

//testing color returner for the board
test('miss should return #94a3b8', () => {
    expect(gameboard.getColor(1,1)).toBe('#94a3b8');
})
test('hit should return #ef4444', () => {
    expect(gameboard.getColor(2,2)).toBe('#ef4444');
})
test('nothing should return #f8fafc', () => {
    expect(gameboard.getColor(9,9)).toBe('#f8fafc');
})