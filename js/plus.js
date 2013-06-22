function plus(){
    document.getElementById('number').innerHTML = parseInt(document.getElementById('number').innerHTML) + 1;
}

var unlocked = 1;

window.onkeydown = function(e){
    if(unlocked){
        unlocked = 0;
        plus();
    }
};

window.onkeyup = function(e){
    unlocked = 1;
};
