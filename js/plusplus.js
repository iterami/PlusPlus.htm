'use strict';

function plus(){
    core_storage_data['score'] += 1;
    core_storage_update();
}

function repo_init(){
    core_repo_init({
      'keybinds': {
        'all': {
          'todo': function(){
              if(!core_keys['all']['state']){
                  plus();
              }
          },
        },
      },
      'storage': {
        'score': 0,
      },
      'title': 'PlusPlus.htm',
    });

    core_storage_update();

    document.getElementById('plus').onclick = plus;
}
