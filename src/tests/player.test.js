import Player from '../player.js';
import Gameboard from '../gameboard'

const player = Player('player1')
const computer = Player('v1.0');
const board = Gameboard();

test('testing if Player exists', () => {
    expect(player.getName()).toBe('player1');
});

//testing for players
test('testing attack (should return the coordinate)', () => {
    expect(player.attack(1,1,board)).toBe(`player1 x:1 y:1`);
});
test('making sure the board got the move (should be miss for now)', () => {
    expect(board.board[1][1]).toBe('miss');
})
test('illegal moves, (return null for moves outside', () => {
    expect(player.attack(-1,-1, board)).toBe(null);
});
test('illegal moves, (x adn y are NaN', () => {
    expect(player.attack('x','y',board)).toBe(null);
});

//testing for ai
//can't really test for a random number generator (will test isLegalMoves)
test('isLegalMove() numbers too small', () => {
    expect(player.isLegalMove(-1,-1,board)).toBe(false);
});
test('isLegalMove() already made move', () => {
    expect(player.isLegalMove(1,1,board)).toBe(false);
});
test('isLegalMove() number too big', () => {
    expect(player.isLegalMove(11,11,board)).toBe(false);
});
test('isLegalMove() legal move', () => {
    expect(player.isLegalMove(2,2,board)).toBe(true);
});
//testing if ai move is within range all the time
test('aiAttack is always legal (mock test to show ai moves is always legal)', () => {
    expect(computer.mockAiAttack(board)).toBe(true);
});