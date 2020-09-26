var database;
var form,game,player;
var GameState;
var PlayerCount;

function setup(){
  database = firebase.database();
  GameState = 0;
  game = new Game();
  game.getState();
  game.start();
  }

function draw(){
  background("white");
    drawSprites();
}