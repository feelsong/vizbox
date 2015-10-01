(function() {
  'use strict';

  angular
    .module('vizbox')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
