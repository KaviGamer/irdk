class Form{
    constructor(){
    
    }
    display(){
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(200,50);
        var name = createInput('Kavish Name');
        name.position(200,150);
        var button = createButton('PLAY');
        button.position(200,350);
        button.mousePress(function(){
        name.hide();
        button.hide();
        title.hide();
        var mynameis = name.value();
        playerCount = playerCount+1;
        player.update(mynameis);
        player.updateCount(playerCount);
        var hi = createElement('h1');
        hi.html("HI"+mynameis);
        hi.position(200,200);
        });
    }
}