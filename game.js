//use factories and make it as clean as possible


//there should be a scoreboard
function gameBoard (winner) {
    let xWins = () =>{ xScore++};
    let oWins = () =>{ oScore++};
}

function gamePlay(){
    let gameContinues = true;
    let rounds = 0;
    let coordinatesAvailable = ['a','b','c',
                       'd','e','f',
                       'g','h','i'];
    while(gameContinues && rounds <=9){
        let xMove = prompt(`Which coordinate would you like to mark "X" with?//aaaa`);
        console.log(xMove)
    }
    
}

gamePlay()