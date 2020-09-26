class Game{
    constructor(){

    }
    getState(){
        var itsgame = database.ref('GameState');
        itsgame.on("value",function (data) {
            GameState = data.val();
        })
    }
    start(){
if(GameState===0){
    player = new Player();
    player.getCount();
    form = new Form();
    form.display();
}
    }
}