'use strict';

function plus(){
    core_storage_data.score += 1;
    update();
    core_storage_save();
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
        'KeyP': {
          'todo': plus,
        },
      },
      'storage': {
        'score': 0,
      },
      'title': 'PlusPlus.htm',
    });

    update();
}

function update(){
    core_storage_update();
    document.title = core_storage_data.score + ' - ' + core_repo_title;
}
