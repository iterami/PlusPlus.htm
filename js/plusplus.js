'use strict';

function plus(){
    var total = parseInt(
      document.getElementById('number').innerHTML,
      10
    ) + 1;

    document.getElementById('number').innerHTML = total;
    setTitle(total);
}

function repo_init(){
    core_repo_init({
      'title': 'PlusPlus.htm',
    });
    core_events_bind({
      'beforeunload': {
        'todo': function(){
            if(parseInt(document.getElementById('number').innerHTML, 10) > 0){
                window.localStorage.setItem(
                  'PlusPlus.htm-number',
                  document.getElementById('number').innerHTML
                );
            }
        },
      },
      'keybinds': {
        'all': {
          'todo': function(){
              if(!core_input_keys['all']['state']){
                  plus();
              }
          },
        },
      },
    });

    document.getElementById('number').innerHTML =
      window.localStorage.getItem('PlusPlus.htm-number') || 0;
    setTitle(document.getElementById('number').innerHTML);

    document.getElementById('plus').onclick = plus;
    document.getElementById('reset').onclick = reset;
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
