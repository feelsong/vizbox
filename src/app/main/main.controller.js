(function() {
  'use strict';

  angular
    .module('vizbox')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $http, $interval,geoLocation) {
      $scope.geoChartId = 'geo';
      $scope.geoLocation = geoLocation;


      $scope.pieChartId = 'piechart';

      $scope.pieRows = [
                             ["d1",  40, 50, 60, 70, 80, 90],
                             ["d2",  25, 26, 24, 28, 23, 22],
                             ["d3",  90, 70, 100, 55, 70, 54],
                             ["d4",  35, 10, 5, 40, 40, 20]
                        ];

      $scope.pieInterval = $interval(function() {
        var pieData = [];
        pieData.push(arrayCreator('d1',6, 50, 30));
        pieData.push(arrayCreator('d2',6, 25, 20));
        pieData.push(arrayCreator('d3',6, 80, 20));
        pieData.push(arrayCreator('d4',6, 25, 20));

        $scope.pieRows = pieData;
      }, 2000);

      function arrayCreator(name, length, average, variance) {
        var array = [];
        array.push(name);

        for (var i =0; i < length; i++) {
          var num = average + (0.5 - Math.random())* variance
          array.push(num);
        }


        return array;
      }
  }
})();
