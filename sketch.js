var database;
var gameState = 0
var player,form,game,playerCount
var players
var distance = 0 
function setup(){
    createCanvas(500,500);
    database = firebase.database()
    game = new Game()
    game.getState()
    game.start()
}

function draw(){
    background("white");
    if (playerCount === 4){
        game.updateState(1)
    }
    if (gameState === 1){
        game.play()
    }
}

