function get(i){
    return document.getElementById(i);
}

function plus(){
    get('number').innerHTML = parseInt(get('number').innerHTML) + 1;
}

function reset(){
    if(confirm('Reset?')){
        localStorage.removeItem('plus-0');
        get('number').innerHTML = 0;
    }
}

var unlocked = 1;
get('number').innerHTML = localStorage.getItem('plus-0') === null
    ? 0
    : localStorage.getItem('plus-0');

window.onbeforeunload = function(e){
    if(parseInt(get('number').innerHTML) > 0){
        localStorage.setItem(
            'plus-0',
            get('number').innerHTML
        );
    }
}

window.onkeydown = function(e){
    if(unlocked){
        unlocked = 0;
        plus();
    }
};

window.onkeyup = function(e){
    unlocked = 1;
};
