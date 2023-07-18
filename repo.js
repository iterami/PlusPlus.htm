'use strict';

function plus(){
    core_storage_data['score'] += 1;
    core_storage_update();
}

function repo_init(){
    core_repo_init({
      'events': {
        'plus': {
          'onclick': function(){
              this.blur();
              plus();
          },
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
        'score': 0,
      },
      'title': 'PlusPlus.htm',
    });

    core_storage_update();
}
