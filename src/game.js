import Player from "./player";
import Gameboard from "./gameboard";

const Game = () => {

    const _printBoard = () => {
        _addAxis();
        const player1 = Player('player1');
        const computer = Player('computer');
        const playerBoard = Gameboard();
        const computerBoard = Gameboard();
        playerBoard.placeShip(0,0,3,'x');
        computerBoard.placeShip(0,0,3,'x');

        let turn = 0;

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
                box.addEventListener('click', (e) => {
                    if (turn == 0) {
                        if (player1.attack(i, j, computerBoard) != null) {
                            //players move
                            player1.attack(i, j, computerBoard);
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

    const playGame = () => {
        _printBoard();
    }

    return {playGame}

}

export default Game;