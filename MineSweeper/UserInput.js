class UserInput {

    constructor(GameLogic) {
        this.GameLogic = GameLogic;
        this.addEventListeners();
    }

    addEventListeners() {
        const GameContainer = document.getElementById("game-container");
        GameContainer.addEventListener("click", (event) => {
            const cell = event.target.closest("td");
            if (cell) {
                const row = parseInt(cell.dataset.row);
                const col = parseInt(cell.dataset.col);

                this.GameLogic.makeMove(row, col);
            }
        });
    }
}

export default UserInput;