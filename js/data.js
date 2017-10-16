'use strict';

function plus(){
    core_storage_data['score'] += 1;
    core_storage_update({
      'bests': true,
    });
}
