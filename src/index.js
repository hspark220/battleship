import './style.css';
import Player from "./player";
import Gameboard from "./gameboard";

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
                    if (computerBoard.allShipSank()) console.log('Game Ended! player wins');

                    //computers move
                    const computerMove = computer.aiAttack(playerBoard);
                    const compBox = document.getElementById(`board2:x${computerMove.charAt(11)}y${computerMove.charAt(15)}`)
                    compBox.style.backgroundColor = playerBoard.getColor(computerMove.charAt(11),computerMove.charAt(15));
                    if (playerBoard.allShipSank()) console.log('Game Ended! computer wins')
                } else {
                    console.log('invalid move')
                }
            }
        });
        board1.append(box);
    }
}
