let gameBoardModule = (function() {
    let gameBoard = ["X", "O"];
    return{gameBoard};
})();


let renderArray = (function() {
    const winner = document.querySelector('.winner')
    const gridBoxes = document.querySelectorAll('.grid-box');
    const resetButton = document.querySelector('.reset')
    //creates array for each box on gameboard
    const gridArray = Array.from(gridBoxes);
    //tracking number to link with each box
    let tracks = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    //event listener and function to reset game
    resetButton.addEventListener('click', resetGrid)
    function resetGrid() {
        gridBoxes.forEach(gridBox => {
            gridBox.innerHTML = " ";
        });
        winner.innerHTML = " ";
        tracks = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    };
    
    //create event listener for each box on gameboard
    gridBoxes.forEach(gridBox => {
        gridBox.addEventListener('click', (e) => {
            //index for the current box clicked
            const index = gridArray.indexOf(e.target)

            //checks to see if clicked box on gameboard already contains X or 0 
            if (gridBoxes[index].innerHTML.includes("X") ||
                gridBoxes[index].innerHTML.includes("0")
            ) {
                return
            }

            //places "X" on board wherever clicked
            gridBoxes[index].innerHTML = gameBoardModule.gameBoard[0]
    
            //use tracking array to idenify which boxes have been clicked by the player
            const trackNbr = tracks.indexOf(index + 1)
            tracks.splice(trackNbr, 1)
            //checks to see if the player has won the game
            if (winCheck("X", gridBoxes)) {
                winner.innerHTML = "Player X Wins!"
            }

            //creates random computer move and track which boxes the computer fills in
            const computerMove = Math.floor(Math.random() * tracks.length);
            const computerIndex = tracks[computerMove];
            //places "O" on the boards wherever the computer chooses
            gridBoxes[computerIndex - 1].innerHTML = gameBoardModule.gameBoard[1]

            tracks.splice(computerMove, 1)
            //checks to see if the computer has won the game
            if (winCheck("O", gridBoxes)) {
                winner.innerHTML = "Computer Wins!"
            }

            //function that checks who has won the game
            function winCheck(playerName, gridBoxes) {
                function check(pos1, pos2, pos3){
                    if (gridBoxes[pos1].innerHTML.includes(playerName) &
                        gridBoxes[pos2].innerHTML.includes(playerName) &
                        gridBoxes[pos3].innerHTML.includes(playerName)) {
                            return true
                        } else {
                            return false
                        }
                    }
                if (check(0, 3, 6)) {
                    return true
                } else if (check(1, 4, 7)) {
                    return true
                } else if (check(2, 5, 8)) {
                    return true
                } else if (check(0, 1, 2)) {
                    return true
                } else if (check(3, 4, 5)) {
                    return true
                } else if (check(6, 7, 8)) {
                    return true
                } else if (check(0, 4, 8)) {
                    return true
                } else if (check(2, 4, 6)) {
                    return true
                }
            };
        });
    });

        
    return{}

})()