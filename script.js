let gameBoardModule = (function() {
    let gameBoard = ["X"];
    return{gameBoard};
})();

let displayController = (function() {

})();

let createPlayer = (playerNumber, assignXO) => {
    return{playerNumber, assignXO};
};

let renderArray = (function() {
    // let grid1 = document.querySelector(".grid-box1");
    // let grid2 = document.querySelector(".grid-box2");
    // let grid3 = document.querySelector(".grid-box3");
    // let grid4 = document.querySelector(".grid-box4");
    // let grid5 = document.querySelector(".grid-box5");
    // let grid6 = document.querySelector(".grid-box6");
    // let grid7 = document.querySelector(".grid-box7");
    // let grid8 = document.querySelector(".grid-box8");
    // let grid9 = document.querySelector(".grid-box9");

    const gridBoxes = document.querySelectorAll('.grid-box');
    const gridArray = Array.from(gridBoxes);
    
    
    gridBoxes.forEach(gridBox => {
        gridBox.addEventListener('click', (e) => {
            const index = gridArray.indexOf(e.target)
            gridBoxes[index].innerHTML = gameBoardModule.gameBoard
        })
    });

    
   // gridBoxes.forEach((gridBox) => {
   //    gridBox.addEventListener('click', playerMove)
   // });
    function playerMove() {
       //gridBoxes.value.innerHTML = gameBoardModule.gameBoard;
    //    if (gridBoxes[0]) {
    //        grid1.innerHTML = gameBoardModule.gameBoard
    //    } else if (gridBoxes[1]) {
    //        grid2.innerHTML = gameBoardModule.gameBoard
    //    } else if (gridBoxes.value = 3) {
    //        grid3.innerHTML = gameBoardModule.gameBoard
    //    } else if (gridBoxes.value = 4) {
    //        grid4.innerHTML = gameBoardModule.gameBoard
    //    } else if (gridBoxes.value = 5) {
    //        grid5.innerHTML = gameBoardModule.gameBoard
    //    } else if (gridBoxes.value = 6) {
    //        grid6.innerHTML = gameBoardModule.gameBoard
    //    } else if (gridBoxes.value = 7) {
    //        grid7.innerHTML = gameBoardModule.gameBoard
    //    } else if (gridBoxes.value = 8) {
    //        grid8.innerHTML = gameBoardModule.gameBoard
    //    } else if (gridBoxes.value = 9) {
    //        grid9.innerHTML = gameBoardModule.gameBoard
    //    };

       
       return{}
    };
})();