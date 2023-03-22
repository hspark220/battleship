import Ship from './ship.js';

const Gameboard = () => {
    const board = [
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
    ];

    let _shipCount = 0;

    const placeShip = (x,y, length, direction) => {
        if (x < 0 || y < 0 || x > 10 || y > 10 || isNaN(x) || isNaN(y)) return null;
        const ship = Ship(length);
        _shipCount += length;
        if (direction == 'x') {
            if (x + length > board[y].length) {return null}
            for (let i = 0; i < length; i ++) {
                board[y][x] = ship;
                x += 1;
            }
        } else if (direction == 'y') {
            if (y + length > board.length) {return null}
            for (let i = 0; i < length; i ++) {
                board[y][x] = ship;
                y += 1;
            }
        } else return null;
    }

    const receiveAttack = (x, y) => {
        if(x < 0 || y < 0 || x >= 10 || y >= 10 || isNaN(x) || isNaN(y)) return null;
        if (board[x][y] == 'hit' || board[x][y] == 'miss') return null
        
        if (typeof(board[x][y]) != 'object' || board[x][y] == null) {
            board[x][y] = 'miss';
            return 'Miss!';
        } else {
            board[x][y].hit();
            board[x][y] = 'hit';
            _shipCount --;
            return 'Hit!'
        }
    }

    const allShipSank = () => { 
        if (_shipCount == 0) return true;
        return false
    }

    const getColor = (x,y) => {
        if (board[x][y] == 'miss') return '#94a3b8';
        else if (board[x][y] == 'hit') return '#ef4444';
        else return '#f8fafc';
    }

    return {board, placeShip, receiveAttack, allShipSank, getColor}
};

export default Gameboard;