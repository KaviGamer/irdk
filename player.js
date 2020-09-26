class Player{
    constructor(){

    }
    update(mynameis){
        var pI = "player"+PlayerCount;
        database.ref(pI).set({name:mynameis});
    }
    updateCount(mycountis){
    database.ref('/').update({
        PlayerCount:mycountis
    });
    }
    getCount(){
        var itscount = database.ref('PlayerCount');
        itscount.on("value",function (data) {
            PlayerCount = data.val();
        })
    }
}