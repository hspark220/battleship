import Gameboard from "./gameboard";

const Player = (name) => {

    const getName = () => {
        return name;
    }

    const attack = (x, y, board) => {
        if(!isLegalMove(x,y,board)) return null;
        board.receiveAttack(x,y);
        return `${name} x:${x} y:${y}`
    }

    const aiAttack = (board) => {
        let randomX = Math.floor(Math.random()*11);
        let randomY = Math.floor(Math.random()*11);
        while (!isLegalMove(randomX, randomY, board)) {
            randomX = Math.floor(Math.random()*11);
            randomY = Math.floor(Math.random()*11);
        }
        board.receiveAttack(randomX, randomY);  
        return `${name} x:${randomX} y:${randomY}`;
        
    }

    const mockAiAttack = (board) => {
        let randomX = Math.floor(Math.random()*11);
        let randomY = Math.floor(Math.random()*11);
        while (!isLegalMove(randomX, randomY, board)) {
            randomX = Math.floor(Math.random()*11);
            randomY = Math.floor(Math.random()*11);
        }
        return isLegalMove(randomX, randomY, board);
        board.receiveAttack(randomX, randomY);  
        
    }

    const isLegalMove = (x, y, board) => {
        if(x < 0 || y < 0 || x >= 10 || y >= 10 || isNaN(x) || isNaN(y)) return false;
        if (board.board[x][y] == 'hit' || board.board[x][y] == 'miss') return false;
        return true;
    }

    return {getName, attack, isLegalMove, aiAttack, mockAiAttack}
}

export default Player;