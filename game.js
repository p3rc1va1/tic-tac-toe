//there should be a scoreboard
function gameBoard() {
    let xScore = 0;
    let oScore = 0;

    return {
        xWins: () => { xScore++ },
        oWins: () => { oScore++ },
        getScores: () => ({ xScore, oScore })
    };
}

const session = gameBoard();
const xScoreBoard = document.getElementById("xScore");
const oScoreboard = document.getElementById("oScore");
const gameCells = document.getElementsByClassName("gameCell");

for (let i = 0; i < gameCells.length; i++) {
    gameCells[i].addEventListener("click", function() {
        this.innerText = "X"
    });
};

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