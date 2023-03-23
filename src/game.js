import Player from "./player";
import Gameboard from "./gameboard";

const Game = () => {


    const _printBoard = () => {

        _addAxis();

        
        const board1 = document.querySelector('.board-1');
        const board2 = document.querySelector('.board-2');
        
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const box = document.createElement('div');
                box.setAttribute('class',`box-ai`)
                box.setAttribute('id',`board2:x${i}y${j}`)

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

    const _checkEndGame = (board) => {

        if (board.allShipSank()) console.log('Game Ended! player wins');
    }

    const _addAxis = () => {
        const yaxis = document.querySelectorAll('.y-axis');
        console.log(yaxis);
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
        playerBoard = Gameboard();
        computerBoard = Gameboard();
        const player1 = Player('player1');
        const computer = Player('computer');

        let turn = 0;
        const board1 = document.querySelector('.board-1');

        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const box = document.getElementById(`board1:x${i}y${j}`);
                box.setAttribute('class','box box-hover')
                box.addEventListener('click', (e) => {
                    if (turn == 0) {
                        if (player1.attack(i, j, computerBoard) != null) {
                            //players move
                            box.style.backgroundColor = computerBoard.getColor(i,j);
                            _checkEndGame(computerBoard);

                            //computers move
                            const computerMove = computer.aiAttack(playerBoard);
                            const compBox = document.getElementById(`board2:x${computerMove.charAt(11)}y${computerMove.charAt(15)}`)
                            compBox.style.backgroundColor = playerBoard.getColor(computerMove.charAt(11),computerMove.charAt(15));
                            _checkEndGame(playerBoard);
                        } else {
                            console.log('invalid move')
                        }
                    }
                });


            }
        }
    }

    const _placeShips = (playerBoard, computerBoard) => {
        const board2 = document.querySelector('.board-2');

        const shipLengths = [5,4,3,3,2];
        let shipIndex = 0;
        
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const box = document.getElementById(`board2:x${i}y${j}`);

                box.addEventListener('click', (e) => {
                    if (shipIndex < 5) {
                        console.log(shipIndex);
                        if (playerBoard.placeShip(i,j,shipLengths[shipIndex], 'x') != null) {
                            playerBoard.placeShip(i,j,shipLengths[shipIndex], 'x');
                            _colorShips(i,j,shipLengths[shipIndex]);
                            shipIndex++;
                            if (shipIndex == 5) _enableBoard(playerBoard, computerBoard);
                        } 
                    }
                });

                board2.append(box);
            }
        }
    }

    const _colorShips = (x,y, length, direction) => {
        for (let i = 0; i < length; i++) {
            if (direction == 'x') {
                const box = document.getElementById(`board2:x${x+i}y${y}`);
                box.style.backgroundColor = '#94a3b8';
            } else {
                const box = document.getElementById(`board2:x${x}y${y+i}`);
                box.style.backgroundColor = '#94a3b8';
            }
            
        }
    }

    const playGame = () => {
        const playerBoard = Gameboard();
        const computerBoard = Gameboard();
        _printBoard(playerBoard, computerBoard);
        _placeShips(playerBoard, computerBoard);
        
    }

    return {playGame}

}

export default Game;