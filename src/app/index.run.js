(function() {
  'use strict';

  angular
    .module('vizbox')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
    $log.debug('check c3', c3);
    $log.debug('check topojson', topojson);
  }

})();
