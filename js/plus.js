function plus(){
    document.getElementById('number').innerHTML = parseInt(document.getElementById('number').innerHTML) + 1;
}

function reset(){
    if(confirm('Reset?')){
        localStorage.removeItem('plus-0');
        document.getElementById('number').innerHTML = 0;
    }
}

var unlocked = 1;
document.getElementById('number').innerHTML = localStorage.getItem('plus-0') === null
  ? 0
  : localStorage.getItem('plus-0');

window.onbeforeunload = function(e){
    if(parseInt(document.getElementById('number').innerHTML) > 0){
        localStorage.setItem(
          'plus-0',
          document.getElementById('number').innerHTML
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
