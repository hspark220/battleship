import Player from "./player";
import Gameboard from "./gameboard";

const Game = () => {


    const _printBoard = () => {
        _addAxis();

        const board1 = document.querySelector('.board-1');
        const board2 = document.querySelector('.board-2');
        console.log(board2);
        
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const box = document.createElement('div');
                box.setAttribute('class',`box-ai`)
                box.setAttribute('id',`board2:x${i}y${j}`)
                box.style.backgroundColor = 'white';

                board2.append(box);
            }
        }
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const box = document.createElement('div');
                box.setAttribute('class',`box`)
                box.setAttribute('id',`board1:x${i}y${j}`)
                board1.append(box);
            }
        }
    }

    const _checkEndGame = (board, name) => {
        if (board.allShipSank()) {
            alert(`${name} WON!`);
            playGame();

        }
        
        //if (board.allShipSank()) console.log('Game Ended! player wins');
        //console.log(board);
    }

    const _addAxis = () => {
        const yaxis = document.querySelectorAll('.y-axis');
        const xaxis = document.querySelectorAll('.x-axis');
        const alphabeth = ['A','B','C','D','E','F','G','H','I','J']

        for (let i = 0; i < 10; i++) {
            const number = document.createElement('p');
            const number2 = document.createElement('p');
            number2.innerHTML = i+1;
            number.innerHTML = i+1;
            yaxis[0].append(number);
            yaxis[1].append(number2);

            const letter = document.createElement('p');
            const letter2 = document.createElement('p');
            letter.innerHTML = alphabeth[i];
            letter2.innerHTML = alphabeth[i];
            xaxis[0].append(letter);
            xaxis[1].append(letter2);
        }
        
 

    }

    const _enableBoard = (playerBoard, computerBoard) => {
        const player1 = Player('player1');
        const computer = Player('computer');

        let turn = 0;

        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const box = document.getElementById(`board1:x${j}y${i}`);
                box.setAttribute('class','box box-hover')
                box.addEventListener('click', (e) => {
                    if (turn == 0) {
                        if (player1.attack(i, j, computerBoard) != null) {
                            //players move
                            box.style.backgroundColor = computerBoard.getColor(i,j);
                            _checkEndGame(computerBoard, 'player1');

                            //computers move
                            const computerMove = computer.aiAttack(playerBoard);
                            const compBox = document.getElementById(`board2:x${computerMove.charAt(11)}y${computerMove.charAt(15)}`)
                            compBox.style.backgroundColor = playerBoard.getColor(computerMove.charAt(15),computerMove.charAt(11));
                            _checkEndGame(playerBoard, 'computer');

                        } else {
                            console.log('invalid move')
                        }
                    }
                });


            }
        }
    }

    const _placeShips = (playerBoard, computerBoard) => {
        const shipLengths = [5,4,3,3,2];
        let shipIndex = 0;
        let direction = 'x';
        const directionButton = document.createElement('button');
        directionButton.innerHTML = 'x';
        directionButton.addEventListener('click', () => {
            direction = direction == 'x' ? 'y' : 'x';
            directionButton.innerHTML = direction == 'x' ? 'x' : 'y';
        })
        document.querySelector('.gameboard').append(directionButton);

        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const box = document.getElementById(`board2:x${i}y${j}`);

                box.addEventListener('click', () => {
                    if (shipIndex < 5) {
                        while (true) {
                            let randomX = Math.floor(Math.random()*11);
                            let randomY = Math.floor(Math.random()*11);
                            if(computerBoard.placeShip(randomX, randomY, shipLengths[shipIndex], _randomDirection()) != null ) break;
                        }
                        if (playerBoard.placeShip(i,j,shipLengths[shipIndex], direction) != null) {
                            _colorShips(i,j,shipLengths[shipIndex], direction);
                            shipIndex++;
                            if (shipIndex == 5) _enableBoard(playerBoard, computerBoard);
                        } 
                    }
                });
            }
        }
        console.log(computerBoard.board);
    }

    const _colorShips = (x,y, length, direction) => {
        console.log(direction == 'x');
        for (let i = 0; i < length; i++) {
            if (direction == 'x') {
                const box = document.getElementById(`board2:x${x}y${y+i}`);
                box.style.backgroundColor = '#fcd34d';
            } else {
                const box = document.getElementById(`board2:x${x+i}y${y}`);
                box.style.backgroundColor = '#fcd34d';
            }
            
        }
    }

    const _randomDirection = () => {
        let randomDirection = Math.floor(Math.random()*3);
        return randomDirection == 1 ? 'x' : 'y';
    }

    const _removeBoard = () => {
        document.querySelector('.computer').remove();
        document.querySelector('.player').remove();
        

        const computer = document.createElement('div');
        const player = document.createElement('div');
        computer.setAttribute('class','computer');
        player.setAttribute('class','player');
        
        const board2 = document.createElement('div');
        const board1 = document.createElement('div');
        board1.setAttribute('class','board-1');
        board2.setAttribute('class','board-2');

        const yaxis = document.createElement('div');
        const xaxis = document.createElement('div');
        yaxis.setAttribute('class','y-axis');
        xaxis.setAttribute('class','x-axis');

        const yaxis2 = document.createElement('div');
        const xaxis2 = document.createElement('div');
        yaxis2.setAttribute('class','y-axis');
        xaxis2.setAttribute('class','x-axis');

        const title = document.createElement('h2');
        const title2 = document.createElement('h2');
        title.setAttribute('class','title');
        title2.setAttribute('class','title');
        title.innerHTML = 'Computer';
        title2.innerHTML = 'Player';

        computer.append(title,board1, yaxis, xaxis);
        player.append(title2, board2, yaxis2, xaxis2);

        document.querySelector('.gameboard').append(computer, player);
    }

    const playGame = () => {
        _removeBoard();
        const playerBoard = Gameboard();
        const computerBoard = Gameboard();
        console.log(computerBoard);
        _printBoard(playerBoard, computerBoard);
        _placeShips(playerBoard, computerBoard);
        
    }

    return {playGame}

}

export default Game;