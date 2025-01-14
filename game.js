//there should be a scoreboard
function gameBoard() {
    let xScore = 0;
    let oScore = 0;

    return {
        xWins: () => { xScore++; resetBoard()},
        oWins: () => { oScore++; resetBoard()},
        getScores: () => ({ xScore, oScore })
    };
}
//setting up the game
let session = gameBoard();
const xScoreBoard = document.getElementById("xScore");
const oScoreboard = document.getElementById("oScore");
const gameCells = document.getElementsByClassName("gameCell");
const resetGame = document.getElementById("reset");

resetGame.addEventListener("click", ()=>{
    session = gameBoard();
    resetBoard();
});

const cellA = document.getElementById("a");
const cellB = document.getElementById("b");
const cellC = document.getElementById("c");
const cellD = document.getElementById("d");
const cellE = document.getElementById("e");
const cellF = document.getElementById("f");
const cellG = document.getElementById("g");
const cellH = document.getElementById("h");
const cellI = document.getElementById("i");

let coinFlip = Math.round(Math.random());
let startingPlayer;
let previousPlayer;
if (coinFlip == 0) {
    startingPlayer = "X";
} else {
    startingPlayer = "O";
}

function resetBoard(){
    cellA.innerText = "";
    cellB.innerText = "";
    cellC.innerText = "";
    cellD.innerText = "";
    cellE.innerText = "";
    cellF.innerText = "";
    cellG.innerText = "";
    cellH.innerText = "";
    cellI.innerText = "";
    previousPlayer = null;
    coinFlip = Math.round(Math.random());
    if (coinFlip == 0) {
        startingPlayer = "X";
    } else {
        startingPlayer = "O";
    }
    xScoreBoard.innerText = session.getScores().xScore;
    oScoreboard.innerText = session.getScores().oScore;
}

//main gameplay
for (let i = 0; i < gameCells.length; i++) {
    gameCells[i].addEventListener("click", function () {
        if(this.innerText == ""){
            if (previousPlayer == null) {
                this.innerText = startingPlayer;
                previousPlayer = startingPlayer;
            } else if (previousPlayer == "X") {
                this.innerText = "O";
                previousPlayer = "O";
            }
            else {
                this.innerText = "X";
                previousPlayer = "X";
            }
        cellA.innerText == "X" && cellB.innerText == "X" && cellC.innerText == "X" ? session.xWins() : null;
        cellD.innerText == "X" && cellE.innerText == "X" && cellF.innerText == "X" ? session.xWins() : null;
        cellG.innerText == "X" && cellH.innerText == "X" && cellI.innerText == "X" ? session.xWins() : null;
        cellA.innerText == "X" && cellD.innerText == "X" && cellG.innerText == "X" ? session.xWins() : null;
        cellB.innerText == "X" && cellE.innerText == "X" && cellH.innerText == "X" ? session.xWins() : null;
        cellC.innerText == "X" && cellF.innerText == "X" && cellI.innerText == "X" ? session.xWins() : null;
        cellA.innerText == "X" && cellE.innerText == "X" && cellI.innerText == "X" ? session.xWins() : null;
        cellG.innerText == "X" && cellE.innerText == "X" && cellC.innerText == "X" ? session.xWins() : null;
        cellA.innerText == "O" && cellB.innerText == "O" && cellC.innerText == "O" ? session.oWins() : null;
        cellD.innerText == "O" && cellE.innerText == "O" && cellF.innerText == "O" ? session.oWins() : null;
        cellG.innerText == "O" && cellH.innerText == "O" && cellI.innerText == "O" ? session.oWins() : null;
        cellA.innerText == "O" && cellD.innerText == "O" && cellG.innerText == "O" ? session.oWins() : null;
        cellB.innerText == "O" && cellE.innerText == "O" && cellH.innerText == "O" ? session.oWins() : null;
        cellC.innerText == "O" && cellF.innerText == "O" && cellI.innerText == "O" ? session.oWins() : null;
        cellA.innerText == "O" && cellE.innerText == "O" && cellI.innerText == "O" ? session.oWins() : null;
        cellG.innerText == "O" && cellE.innerText == "O" && cellC.innerText == "O" ? session.oWins() : null;




        }
    });
};


//-----------------terminal version-----------------
/*
const prompt = require('prompt-sync')();
//use factories and make it as clean as possible


//there should be a scoreboard
function gameBoard() {
    let xScore = 0;
    let oScore = 0;

    // Return an object with methods to access and modify the scores
    return {
        xWins: () => { xScore++ },
        oWins: () => { oScore++ },
        getScores: () => ({ xScore, oScore })  // A method to see the current scores
    };
}


function gamePlay(){
    let gameContinues = true;
    let rounds = 1;
    let coordinatesAvailable = ['a','b','c',
                                'd','e','f',
                                'g','h','i'];
    while(gameContinues && rounds <=4){
        let xMove;
        let oMove;
        //wait for a valid move
        do{
        xMove = prompt("What is your move X?")
        }while(!(coordinatesAvailable.includes(xMove)));

        //delete the selected coordinate
        coordinatesAvailable.push("X"+coordinatesAvailable.splice(coordinatesAvailable.indexOf(xMove),1));
        console.log(coordinatesAvailable)

        if(rounds>=2 &&
            (coordinatesAvailable.includes("Xa", -(rounds*2))&& coordinatesAvailable.includes("Xb", -(rounds*2))&& coordinatesAvailable.includes("Xc", -(rounds*2)))
            ||
            (coordinatesAvailable.includes("Xd",-(rounds*2))&& coordinatesAvailable.includes("Xe", -(rounds*2))&& coordinatesAvailable.includes("Xf", -(rounds*2)))
            ||
            (coordinatesAvailable.includes("Xg",-(rounds*2))&& coordinatesAvailable.includes("Xh", -(rounds*2))&& coordinatesAvailable.includes("Xi", -(rounds*2)))
            ||
            (coordinatesAvailable.includes("Xa",-(rounds*2))&& coordinatesAvailable.includes("Xd", -(rounds*2))&& coordinatesAvailable.includes("Xg", -(rounds*2)))
            ||
            (coordinatesAvailable.includes("Xb",-(rounds*2))&& coordinatesAvailable.includes("Xe", -(rounds*2))&& coordinatesAvailable.includes("Xh", -(rounds*2)))
            ||
            (coordinatesAvailable.includes("Xc",-(rounds*2))&& coordinatesAvailable.includes("Xf", -(rounds*2))&& coordinatesAvailable.includes("Xi", -(rounds*2)))
            ||
            (coordinatesAvailable.includes("Xa",-(rounds*2))&& coordinatesAvailable.includes("Xe", -(rounds*2))&& coordinatesAvailable.includes("Xi", -(rounds*2)))
            ||
            (coordinatesAvailable.includes("Xg",-(rounds*2))&& coordinatesAvailable.includes("Xe", -(rounds*2))&& coordinatesAvailable.includes("Xc", -(rounds*2)))

        ){
            console.log("X won!!!")
            session.xWins()
            console.log("Curren score: ", session.getScores())
            break
        }
        //wait for a valid move
        do{
        oMove = prompt("What is your move O?")
        }while(!(coordinatesAvailable.includes(oMove)));

        //delete the selected coordinate
        coordinatesAvailable.push("O"+coordinatesAvailable.splice(coordinatesAvailable.indexOf(oMove),1));
        console.log(coordinatesAvailable)
        
        if(rounds>=2 &&
            (coordinatesAvailable.includes("Oa", -(rounds*2))&& coordinatesAvailable.includes("Ob", -(rounds*2))&& coordinatesAvailable.includes("Oc", -(rounds*2)))
            ||
            (coordinatesAvailable.includes("Od",-(rounds*2))&& coordinatesAvailable.includes("Oe", -(rounds*2))&& coordinatesAvailable.includes("Of", -(rounds*2)))
            ||
            (coordinatesAvailable.includes("Og",-(rounds*2))&& coordinatesAvailable.includes("Oh", -(rounds*2))&& coordinatesAvailable.includes("Oi", -(rounds*2)))
            ||
            (coordinatesAvailable.includes("Oa",-(rounds*2))&& coordinatesAvailable.includes("Od", -(rounds*2))&& coordinatesAvailable.includes("Og", -(rounds*2)))
            ||
            (coordinatesAvailable.includes("Ob",-(rounds*2))&& coordinatesAvailable.includes("Oe", -(rounds*2))&& coordinatesAvailable.includes("Oh", -(rounds*2)))
            ||
            (coordinatesAvailable.includes("Oc",-(rounds*2))&& coordinatesAvailable.includes("Of", -(rounds*2))&& coordinatesAvailable.includes("Oi", -(rounds*2)))
            ||
            (coordinatesAvailable.includes("Oa",-(rounds*2))&& coordinatesAvailable.includes("Oe", -(rounds*2))&& coordinatesAvailable.includes("Oi", -(rounds*2)))
            ||
            (coordinatesAvailable.includes("Og",-(rounds*2))&& coordinatesAvailable.includes("Oe", -(rounds*2))&& coordinatesAvailable.includes("Oc", -(rounds*2)))

        ){
            console.log("O won!!!")
            session.oWins()
            console.log("Curren score: ", session.getScores())
            break
        }


        

        rounds++
    }
    
};

const session = gameBoard()
while (true){
    gamePlay()
}*/