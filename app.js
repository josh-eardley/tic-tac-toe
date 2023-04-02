/*************State*************/
const state = {};

function resetState() {
    state.board = [{value: ""},{value: ""},{value: ""},{value: ""},{value: ""},{value: ""},{value: ""},{value: ""},{value: ""}]
    state.size = 9;
    state.playerIndex = 0;
    state.messageBox = "Welcome to the classic game of Tic-Tac-Toe. Enter your name at the top of the screen and select your board size to get started!";
};
resetState();

/*************Dom Elements*************/

let body = document.querySelector("body");
const board = document.createElement('main');
board.id = 'board';

const titleH1 = document.createElement('h1');
titleH1.id = 'title';
titleH1.innerText = 'Tic-Tac-Toe';
body.appendChild(titleH1);

const gameSetup = document.createElement("p");
gameSetup.id = "gameSetup";
body.appendChild(gameSetup);

let playerOne = document.createElement("input");
playerOne.value = "";
playerOne.placeholder = "Player One";
gameSetup.appendChild(playerOne);

let playerTwo = document.createElement("Input");
playerTwo.value = "";
playerTwo.placeholder = "Player Two / Computer Player";
gameSetup.appendChild(playerTwo);

let selectGame = document.createElement("p");
selectGame.id = "selectGame";
selectGame.innerText = "Select New Game";
gameSetup.appendChild(selectGame);

const buttonThree = document.createElement("button");
buttonThree.innerText = "3 X 3";
gameSetup.appendChild(buttonThree);

const buttonFour = document.createElement("button");
buttonFour.innerText = "4 X 4";
gameSetup.appendChild(buttonFour);

const buttonFive = document.createElement("button");
buttonFive.innerText = "5 X 5";
gameSetup.appendChild(buttonFive);

let playerMessage = document.createElement('p');

/*************Functions*************/

function renderPlayerMessage() {
    playerMessage.id = "playerMessage";
    playerMessage.innerText = state.messageBox;
    gameSetup.appendChild(playerMessage);
}

function clearBoard(parent) {
    while (parent.hasChildNodes()) {
        parent.removeChild(parent.firstChild);
      } 
}

function initialBoardRender() {
    clearBoard(board)
    for (let i = 0; i < state.size; i++) {
        state.board[i] = {value: ""};
        const div = document.createElement('div');
        div.className = `cell${state.size}`;
        div.id = i;
        board.appendChild(div)
    }
    body.appendChild(board);
    renderPlayerMessage()
}

function renderBoard() {
    clearBoard(board);
    for (let i = 0; i < state.size; i++) {
        const div = document.createElement('div');
        div.innerText = state.board[i].value;
        div.className = `cell${state.size}`;
        div.id = i;
        board.appendChild(div);
    }
    body.appendChild(board);
}    

function takeTurns(cellIndex) {
    if (state.playerIndex % 2 === 0 && state.board[cellIndex].value === "") {
        state.board[cellIndex].value = "X";
        state.playerIndex++;
    } else if (state.playerIndex % 2 ===1 && state.board[cellIndex].value === "" && playerTwo.value != "") {
        state.board[cellIndex].value = "O";
        state.playerIndex++;
    } else return;
}

// function computerMoves(computerCellIndex) {
//     if (state.playerIndex % 2 === 1 && playerTwo.value === "") {
//         state.board[computerCellIndex].value = "O";
//         state.playerIndex++;
//     }
// }


function checkWinner() {
    if (state.size === 9) {
        if (state.board[0,1,2].value === "X" ||
            state.board[3,4,5].value === "X" ||
            state.board[6,7,8].value === "X" ||
            state.board[0,3,6].value === "X" ||
            state.board[1,4,7].value === "X" ||
            state.board[2,5,8].value === "X" ||        
            state.board[0,4,8].value === "X" ||        
            state.board[2,4,6].value === "X") {
                playerMessage.innerText = `Well done ${playerOne.value}, you Win!`;
                return true;

        } else if (state.board[0,1,2].value === "O" ||
                   state.board[3,4,5].value === "O" ||
                   state.board[6,7,8].value === "O" ||
                   state.board[0,3,6].value === "O" ||
                   state.board[1,4,7].value === "O" ||
                   state.board[2,5,8].value === "O" ||        
                   state.board[0,4,8].value === "O" ||        
                   state.board[2,4,6].value === "O") {
                        if (playerTwo.value === "") {
                            playerMessage.innerText = "Better luck next time, Computer Player Wins!";
                            return true;
                        } else {
                            playerMessage.innerText = `Good job ${playerTwo.value}, you've won!`;
                            return true;
                        }
             } 
    } else if (state.size === 16) {
        if (state.board[0,1,2,3].value === "X" ||
            state.board[4,5,6,7].value === "X" ||
            state.board[8,9,10,11].value === "X" ||
            state.board[12,13,14,15].value === "X" ||
            state.board[0,4,8,12].value === "X" ||
            state.board[1,5,9,13].value === "X" ||
            state.board[2,6,10,14].value === "X" ||
            state.board[3,7,11,15].value === "X" ||
            state.board[0,5,10,15].value === "X" ||
            state.board[3,6,9,12].value === "X") {
                playerMessage.innerText = `Well done ${playerOne.value}, you Win!`;
                return true;

            } else if (state.board[0,1,2,3].value === "O" ||
                       state.board[4,5,6,7].value === "O" ||
                       state.board[8,9,10,11].value === "O" ||
                       state.board[12,13,14,15].value === "O" ||
                       state.board[0,4,8,12].value === "O" ||
                       state.board[1,5,9,13].value === "O" ||
                       state.board[2,6,10,14].value === "O" ||
                       state.board[3,7,11,15].value === "O" ||
                       state.board[0,5,10,15].value === "O" ||
                       state.board[3,6,9,12].value === "O") {
                        if (playerTwo.value === "") {
                            playerMessage.innerText = "Better luck next time, computer Player Wins!";
                            return true;
                        } else {
                            playerMessage.innerText = `Good job ${playerTwo.value}, you've won!`;
                            return true;
                        } 
                }
    } else if (state.size === 25) {
        if (state.board[0,1,2,3,4].value === "X" ||
            state.board[5,6,7,8,9].value === "X" ||
            state.board[10,11,12,13,14].value === "X" ||
            state.board[15,16,17,18,19].value === "X" ||
            state.board[20,21,22,23,24].value === "X" ||
            state.board[0,5,10,15,20].value === "X" ||
            state.board[1,6,11,16,21].value === "X" ||
            state.board[2,7,12,17,22].value === "X" ||
            state.board[3,8,13,18,23].value === "X" ||
            state.board[4,9,14,19,24].value === "X" ||
            state.board[0,6,12,18,24].value === "X" ||
            state.board[20,16,12,8,4].value === "X") {
                playerMessage.innerText = `Well done ${playerOne.value}, you Win!`;
                return true;

            } else if (state.board[0,1,2,3,4].value === "O" ||
                       state.board[5,6,7,8,9].value === "O" ||
                       state.board[10,11,12,13,14].value === "O" ||
                       state.board[15,16,17,18,19].value === "O" ||
                       state.board[20,21,22,23,24].value === "O" ||
                       state.board[0,5,10,15,20].value === "O" ||
                       state.board[1,6,11,16,21].value === "O" ||
                       state.board[2,7,12,17,22].value === "O" ||
                       state.board[3,8,13,18,23].value === "O" ||
                       state.board[4,9,14,19,24].value === "O" ||
                       state.board[0,6,12,18,24].value === "O" ||
                       state.board[20,16,12,8,4].value === "O") {
                        if (playerTwo.value === "") {
                            playerMessage.innerText = "Better luck next time, computer Player Wins!";
                            return true;
                        } else {
                            playerMessage.innerText = `Good job ${playerTwo.value}, you've won!`;
                            return true;
                        }
                }
    } else if (state.playerIndex === state.size) {
        playerMessage.innerText = "It's a draw!";
    }
}

function render() {
    renderBoard();
    renderPlayerMessage();
}

/*************Event Listeners*************/
buttonThree.addEventListener("click", function() {
    resetState();
    state.size = 9;
    initialBoardRender();
})

buttonFour.addEventListener("click", function() {
    resetState();
    state.size = 16;
    initialBoardRender();
})

buttonFive.addEventListener("click", function() {
    resetState();
    state.size = 25;
    initialBoardRender();
})

board.addEventListener("click", function(event) {
    if (playerOne.value === "" || playerTwo.value === "") {
        // added || playerTwo.value === "" above because computer moves function is still not working.
        // if computerMoves() were working, would only require player one name
        playerMessage.innerText = "Make sure to enter your name at the top of the screen before starting your game.";
        clearBoard();
    } else {
        playerMessage.innerText = ""
        let cellIndex = event.target.id;
        // let computerCellIndex = state.board.indexOf("");
        checkWinner();
        takeTurns(cellIndex);
        // computerMoves(computerCellIndex);
        renderBoard();
        if (checkWinner()) {
            
        } 
    }
})

render();