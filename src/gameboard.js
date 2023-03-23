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

    const placeShip = (y,x, length, direction) => {
        if (x < 0 || y < 0 || x > 10 || y > 10 || isNaN(x) || isNaN(y)) return null;
        if (board[x][y] != null) return null;
        const ship = Ship(length);
        _shipCount += length;
        if (direction == 'y') {
            if (y + length >= 10) {return null}
            for (let i = 0; i < length; i ++) {
                board[x][y] = ship;
                y += 1;
                return 1;
            }
        } else if (direction == 'x') {
            if (x + length >= 10) {return null}
            for (let i = 0; i < length; i ++) {
                board[x][y] = ship;
                x += 1;
                return 1;
            }
        } else return null;
    }

    const receiveAttack = (x,y) => {
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

    const getColor = (y,x) => {
        console.log(`color coordinates ${x} ${y}`)
        console.log(board[x][y]);
        if (board[x][y] == 'miss') return '#94a3b8';
        else if (board[x][y] == 'hit') return '#ef4444';
        else return '#f8fafc';
    }

    return {board, placeShip, receiveAttack, allShipSank, getColor}
};

export default Gameboard;