(function() {
  'use strict';

  angular
    .module('vizbox')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, toastr) {
      console.log('mainController init');
  }
})();
