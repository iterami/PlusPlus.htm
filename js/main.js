'use strict';

function repo_init(){
    core_repo_init({
      'info-events': {
        'plus': {
          'todo': plus,
        },
      },
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
        'score': {
          'default': 0,
          'type': 1,
        },
      },
      'title': 'PlusPlus.htm',
    });

    core_storage_update();
}
