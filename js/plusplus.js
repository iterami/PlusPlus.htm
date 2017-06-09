'use strict';

function plus(){
    core_storage_data['score'] += 1;
    core_storage_update();
}

function repo_init(){
    core_repo_init({
      'storage': {
        'score': 0,
      },
      'title': 'PlusPlus.htm',
    });
    core_events_bind({
      'beforeunload': {
        'todo': core_storage_save,
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
    });

    core_storage_update();

    document.getElementById('plus').onclick = plus;
    document.getElementById('reset').onclick = core_storage_reset;
}
