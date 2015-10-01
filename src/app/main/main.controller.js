(function() {
  'use strict';

  angular
    .module('vizbox')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $http, geoLocation) {
      $scope.geoChartId = 'geo';
      $scope.geoLocation = geoLocation;
  }
})();
