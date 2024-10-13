import GameBoard from "./GameBoard.js";
import GameLogic from "./GameLogic.js";
import UserInput from "./UserInput.js";

const myGameBoard = new GameBoard(9,9);
myGameBoard.renderBoard("game-container");

const gameLogic = new GameLogic(myGameBoard);
const userInput = new UserInput(gameLogic);

//myGameBoard.updateCell(0, 1, "X");
//myGameBoard.renderBoard("game-container");