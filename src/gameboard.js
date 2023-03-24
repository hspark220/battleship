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
        if (x < 0 || y < 0 || x >= 10 || y >= 10 || isNaN(x) || isNaN(y)) return null;
        if (y+length > 10 || x+length > 10) return null
        for (let i = 0; i < length; i++) {
            if (direction == 'x') {
                if(board[y][x+i] != null) return null;
            } else {
                if(board[y+i][x] != null) return null;
            }
        }

        const ship = Ship(length);
        _shipCount += length;
        if (direction == 'y') {
            for (let i = 0; i < length; i ++) {
                board[y][x] = ship;
                y++;
                
            }
            return 1;
        } else if (direction == 'x') {
            for (let i = 0; i < length; i ++) {
                board[y][x] = ship;
                x++;
                
            }
            return 1;
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
        if (board[x][y] == 'miss') return '#94a3b8';
        else if (board[x][y] == 'hit') return '#ef4444';
        else return '#f8fafc';
    }

    return {board, placeShip, receiveAttack, allShipSank, getColor}
};

export default Gameboard;