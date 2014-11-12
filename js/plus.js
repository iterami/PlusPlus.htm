function plus(){
    document.getElementById('number').innerHTML =
      parseInt(document.getElementById('number').innerHTML) + 1;
}

function reset(){
    if(!confirm('Reset?')){
        return;
    }

    window.localStorage.removeItem('Plus.htm-number');
    document.getElementById('number').innerHTML = 0;
}

var unlocked = true;
document.getElementById('number').innerHTML =
  window.localStorage.getItem('Plus.htm-number') === null
    ? 0
    : window.localStorage.getItem('Plus.htm-number');

window.onbeforeunload = function(e){
    if(parseInt(document.getElementById('number').innerHTML) > 0){
        window.localStorage.setItem(
          'Plus.htm-number',
          document.getElementById('number').innerHTML
        );
    }
}

window.onkeydown = function(e){
    if(!unlocked){
        return;
    }

    unlocked = false;
    plus();
};

window.onkeyup = function(e){
    unlocked = true;
};
