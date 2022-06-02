let gameBoardModule = (function() {
    let gameBoard = ["X"];
    return(gameBoard);
})();

let displayController = (function() {

})();

let createPlayer = (playerNumber, assignXO) => {
    return(playerNumber, assignXO);
};

let renderArray = (function() {
    const gridBoxes = document.querySelectorAll(".grid-box");
    gridBoxes.forEach((gridBox) => {
        gridBox.addEventListener('click', playerMove)
    });
    function playerMove() {
       return gridBox.textContent = gameBoardModule.gameBoard;
    };
})();