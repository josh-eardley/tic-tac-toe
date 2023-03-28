let body = document.querySelector("body");
const board = document.createElement('main');
board.id = 'board';
const state = {board: []}

function resetState() {
    state.players = ['', ''];
    state.winner = ""
    state.size = 9
  };

const titleH1 = document.createElement('h1');
titleH1.id = 'title';
titleH1.innerText = 'Tic-Tac-Toe';
body.appendChild(titleH1);

const gameSetup = document.createElement("p");
gameSetup.id = "gameSetup";
body.appendChild(gameSetup);

let playerOne = document.createElement("input");
playerOne.placeholder = "Player One";
// playerOne = state.players[0]
gameSetup.appendChild(playerOne);

let playerTwo = document.createElement("Input");
playerTwo.placeholder = "Player Two / Computer Player";
// playerOne = state.players[1]
gameSetup.appendChild(playerTwo);

const buttonThree = document.createElement("button");
buttonThree.innerText = "3 X 3";
gameSetup.appendChild(buttonThree);
buttonThree.addEventListener("click", function() {
    // makeBoardThreeWide();
    state.size = 9;
    renderBoard()
})

const buttonFour = document.createElement("button");
buttonFour.innerText = "4 X 4";
gameSetup.appendChild(buttonFour);
buttonFour.addEventListener("click", function() {
    state.size = 16;
    renderBoard()
})

const buttonFive = document.createElement("button")
buttonFive.innerText = "5 X 5";
gameSetup.appendChild(buttonFive);
buttonFive.addEventListener("click", function() {
    // makeBoardFiveWide();
    state.size = 25;
    renderBoard()
})

function clearBoard(parent) {
    while (parent.hasChildNodes()) {
        parent.removeChild(parent.firstChild);
      } 
}

function renderBoard() {
    clearBoard(board);
    for (let i = 0; i < state.size; i++) {
        state.board[i] = {value: ""};
        const div = document.createElement('div');
        div.className = `cell${state.size}`;
        board.appendChild(div)
    }
    body.appendChild(board);
}       

