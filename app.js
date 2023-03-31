/*************State*************/
const state = {};

function resetState() {
    state.board = []
    // state.players = [`${playerOne.innerText}`, `${playerTwo.innerText}`];
    state.players = ["", ""];
    state.size = 0
    state.playerIndex = 0
  };
resetState();
/*************Dom Elements*************/

let body = document.querySelector("body");
const board = document.createElement('main');
board.id = 'board';

// board size defaults to 9 when the page is first loaded
state.size = 9;
initialBoardRender()
/* without the size hard coded in, the page renders with nothing on the right side
until one of the buttons is pressed */

const titleH1 = document.createElement('h1');
titleH1.id = 'title';
titleH1.innerText = 'Tic-Tac-Toe';
body.appendChild(titleH1);

const gameSetup = document.createElement("p");
gameSetup.id = "gameSetup";
body.appendChild(gameSetup);

let playerOne = document.createElement("input");
playerOne.placeholder = "Player One";
gameSetup.appendChild(playerOne);

let playerTwo = document.createElement("Input");
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

const buttonFive = document.createElement("button")
buttonFive.innerText = "5 X 5";
gameSetup.appendChild(buttonFive);

/*************Functions*************/

function clearBoard(parent) {
    while (parent.hasChildNodes()) {
        parent.removeChild(parent.firstChild);
      } 
}

function initialBoardRender() {
    for (let i = 0; i <state.size; i++) {
        state.board[i] = {value: ""};
        const div = document.createElement('div');
        div.className = `cell${state.size}`;
        div.id = i;
        board.appendChild(div)
    }
    body.appendChild(board);
}

function renderBoard() {
    clearBoard(board);
    for (let i = 0; i < state.size; i++) {
        // state.board[i] = {value: ""};
        const div = document.createElement('div');
        div.className = `cell${state.size}`;
        div.id = i;
        board.appendChild(div)
    }
    body.appendChild(board);
}    

function takeTurns(cellIndex) {
    const selected = document.getElementById(cellIndex);
    console.log(state.playerIndex);
    console.log(selected);
    if (state.playerIndex === 0) {
        state.board[cellIndex].value = "X";
        selected.innerText = "X";
        state.playerIndex++;
        console.log("Is this working?");
    } else if (state.playerIndex === 1){
        state.board[cellIndex].value = "O";
        selected.innerText = "O";
        state.playerIndex--;
        console.log("Is this working? 2");
    }
    console.log(state.board[cellIndex]);
}


function gameWinner() {
    if (board.state.size === 9) {
        if (state.board[0,1,2] === {value: "X"} ||
            state.board[3,4,5] === {value: "X"} ||
            state.board[6,7,8] === {value: "X"} ||
            state.board[0,3,6] === {value: "X"} ||
            state.board[1,4,7] === {value: "X"} ||
            state.board[2,5,8] === {value: "X"} ||        
            state.board[0,4,8] === {value: "X"} ||        
            state.board[2,4,6] === {value: "X"}) {
                if (state.player[1] === "") {
                    console.log("You Win!");
                } else {
                    console.log(`${state.players[0]} Wins!`);       
                }
        } else if (state.board[0,1,2] === {value: "O"} ||
                   state.board[3,4,5] === {value: "O"} ||
                   state.board[6,7,8] === {value: "O"} ||
                   state.board[0,3,6] === {value: "O"} ||
                   state.board[1,4,7] === {value: "O"} ||
                   state.board[2,5,8] === {value: "O"} ||        
                   state.board[0,4,8] === {value: "O"} ||        
                   state.board[2,4,6] === {value: "O"}) {
                        if (playerTwo.innerText === "") {
                            console.log("Computer Player Wins!");
                        } else {
                            console.log(`${state.players[1]} Wins!`);
                        }
        } else {
            console.log("It's a Draw!");
        }    
    } else if (board.state.size === 16) {
        if (state.board[0,1,2,3] === {value: "X"} ||
            state.board[4,5,6,7] === {value: "X"} ||
            state.board[8,9,10,11] === {value: "X"} ||
            state.board[12,13,14,15] === {value: "X"} ||
            state.board[0,4,8,12] === {value: "X"} ||
            state.board[1,5,9,13] === {value: "X"} ||
            state.board[2,6,10,14] === {value: "X"} ||
            state.board[3,7,11,15] === {value: "X"} ||
            state.board[0,5,10,15] === {value: "X"} ||
            state.board[3,6,9,12] === {value: "X"}) {
                if (state.players[1] === "") {
                    console.log("You Win!");
                } else {
                    console.log(`${state.players[0]} Wins!`);
                }
            } else if (state.board[0,1,2,3] === {value: "O"} ||
                       state.board[4,5,6,7] === {value: "O"} ||
                       state.board[8,9,10,11] === {value: "O"} ||
                       state.board[12,13,14,15] === {value: "O"} ||
                       state.board[0,4,8,12] === {value: "O"} ||
                       state.board[1,5,9,13] === {value: "O"} ||
                       state.board[2,6,10,14] === {value: "O"} ||
                       state.board[3,7,11,15] === {value: "O"} ||
                       state.board[0,5,10,15] === {value: "O"} ||
                       state.board[3,6,9,12] === {value: "O"}) {
                        if (playerTwo.innerText === "") {
                            console.log("Computer Player Wins!");
                        } else {
                            console.log(`${state.players[1]} Wins!`);
                        } 
                } else {
                    console.log("It's a Draw!")
                }

            
    } else if (board.state.size === 25) {
        if (state.board[0,1,2,3,4] === {value: "X"} ||
            state.board[5,6,7,8,9] === {value: "X"} ||
            state.board[10,11,12,13,14] === {value: "X"} ||
            state.board[15,16,17,18,19] === {value: "X"} ||
            state.board[20,21,22,23,24] === {value: "X"} ||
            state.board[0,5,10,15,20] === {value: "X"} ||
            state.board[1,6,11,16,21] === {value: "X"} ||
            state.board[2,7,12,17,22] === {value: "X"} ||
            state.board[3,8,13,18,23] === {value: "X"} ||
            state.board[4,9,14,19,24] === {value: "X"} ||
            state.board[0,6,12,18,24] === {value: "X"} ||
            state.board[20,16,12,8,4] === {value: "X"}) {
                if (state.players[2] === "") {
                    console.log("You Win!");
                } else {
                    console.log(`${state.players[0]} Wins!`);
                }
            } else if (state.board[0,1,2,3,4] === {value: "O"} ||
                       state.board[5,6,7,8,9] === {value: "O"} ||
                       state.board[10,11,12,13,14] === {value: "O"} ||
                       state.board[15,16,17,18,19] === {value: "O"} ||
                       state.board[20,21,22,23,24] === {value: "O"} ||
                       state.board[0,5,10,15,20] === {value: "O"} ||
                       state.board[1,6,11,16,21] === {value: "O"} ||
                       state.board[2,7,12,17,22] === {value: "O"} ||
                       state.board[3,8,13,18,23] === {value: "O"} ||
                       state.board[4,9,14,19,24] === {value: "O"} ||
                       state.board[0,6,12,18,24] === {value: "O"} ||
                       state.board[20,16,12,8,4] === {value: "O"}) {
                        if (playerTwo.innerText === "") {
                            console.log("Computer Player Wins!");
                        } else {
                            console.log(`${state.players[1]} Wins!`);
                        }
                       } else {
                        console.log("It's a Draw!");
                       } 
    }
}

function render() {
    renderBoard()
}

/*************Event Listeners*************/
buttonThree.addEventListener("click", function() {
    state.size = 9;
    initialBoardRender()
})

buttonFour.addEventListener("click", function() {
    state.size = 16;
    initialBoardRender()
})

buttonFive.addEventListener("click", function() {
    state.size = 25;
    initialBoardRender()
})

board.addEventListener("click", function(event) {
    console.log("is this gonna work? 3")
    let cellIndex = event.target.id;
    takeTurns(cellIndex);
    renderBoard();
})

render();