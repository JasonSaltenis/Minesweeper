class GameLogic {
    constructor(gameBoard) {
        this.gameBoard = gameBoard;
        this.currentPlayer = " ";
        this.gameOver = false;
    }

    makeMove(row, col) {
        if (this.gameOver) {
            return;
        }

        if (this.gameBoard.board[row][col] === null) {
            this.gameBoard.updateCell(row, col, this.currentPlayer);
            this.gameBoard.renderBoard("game-container");

            if (this.checkForWin()) {
                this.gameOver = true;
                alert('Player $(this.currentPlayer} wins!')
            } else if (this.checkForLoss()) {
                this.gameOver = true;
                alert("Sorry, Try Again!")
            } 
        }
    }

    checkForWin() {
        //check rows
        for (let r = 0; r < this.gameBoard.rows; r++) {
            if (this.checkLine(this.gameBoard.board[r][0], this.gameBoard.board[r][1],
                this.gameBoard.board[r][2])) {
                console.log(1);
                    return true;
                }
        }

        //check columns
        for (let c = 0; c < this.gameBoard.rows; c++) {
            if (this.checkLine(this.gameBoard.board[0][c], this.gameBoard.board[1][c],
                this.gameBoard.board[2][c])) {
                console.log(1);
                return true;
            }
        }

        //check Diagonals
        if (this.checkLine(this.gameBoard.board[0][0], this.gameBoard.board[1][1],
            this.gameBoard.board[2][2])) {
            console.log(2);
                return true;
        }

        if (this.checkLine(this.gameBoard.board[0][2], this.gameBoard.board[1][1],
            this.gameBoard.board[2][0])) {
            console.log(3);
            return true;

        }

        return false;
    }

    checkForLoss() {
        for (let r = 0; r < this.gameBoard.rows; r++) {
            for (let c = 0; c < this.gameBoard.cols; c++)
                /*for ()*/ {
                if (this.gameBoard.board[r][c] === null) {
                    return false;
                }
            }
        }
    return true;
    }
    checkLine(a, b, c) {
        return a !== null && a === b && a === c;
    }
}

export default GameLogic;