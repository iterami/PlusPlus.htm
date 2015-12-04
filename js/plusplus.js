'use strict';

function plus(){
    var total = parseInt(document.getElementById('number').innerHTML) + 1;

    document.getElementById('number').innerHTML = total;
    setTitle(total);
}

function reset(){
    if(!window.confirm('Reset score?')){
        return;
    }

    window.localStorage.removeItem('PlusPlus.htm-number');
    document.getElementById('number').innerHTML = 0;
    setTitle(0);
}

function setTitle(newTitle){
    document.title = newTitle + ' - PlusPlus.htm';
}

var locked = false;

window.onbeforeunload = function(e){
    if(parseInt(document.getElementById('number').innerHTML) > 0){
        window.localStorage.setItem(
          'PlusPlus.htm-number',
          document.getElementById('number').innerHTML
        );
    }
}

window.onkeydown = function(e){
    if(locked){
        return;
    }

    locked = true;
    plus();
};

window.onkeyup = function(e){
    locked = false;
};

window.onload = function(e){
    document.getElementById('number').innerHTML =
      window.localStorage.getItem('PlusPlus.htm-number') || 0;
    setTitle(document.getElementById('number').innerHTML);
};
