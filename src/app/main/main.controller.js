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

      $scope.pieRows = getPieData();

      $scope.pieInterval = $interval(function() {
        $scope.pieRows = getPieData();
      }, 2000);

      function getPieData() {
        return [
          arrayCreator('d1',6, 50, 30),
          arrayCreator('d2',6, 25, 20),
          arrayCreator('d3',6, 80, 20),
          arrayCreator('d4',6, 25, 20)
        ]
      }

      function arrayCreator(name, length, average, variance) {
        var array = [];
        array.push(name);

        for (var i =0; i < length; i++) {
          var num = average + (0.5 - Math.random())* variance
          array.push(num);
        }
        return array;
      }

      //lineChart
      $scope.lineChartId = 'lineChart';
      var lineData = new lineDataCreator();
      lineData.setLength(12);
      lineData.setAverageAndVariance('d1Data',55,15);
      lineData.setAverageAndVariance('d2Data',30,20);

      $scope.lineRows =  lineData.getInitialArray();
      $scope.lineInterval = $interval(function() {
             $scope.lineRows = lineData.getUpdatedArray();
      }, 2000);

      function lineDataCreator() {
        return {
          length: 0,
          data: {
            xData: {
              array: ['x'],
              average: 0,
              variance: 0
            },
            d1Data: {
              array: ['d1'],
              average: 0,
              variance: 0
            },
            d2Data: {
              array: ['d2'],
              average: 0,
              variance: 0
            }
          },
          setAverageAndVariance: function(name, average, variance) {
            this.data[name]['average'] = average;
            this.data[name]['variance'] = variance;
          },
          setLength: function(length) {
            this.length = length;
          },
          getInitialArray: function(number) {
            var _this = this;
            return Object.keys(_this.data).map(function(key) {
              var array = _this.data[key].array;
              var length = _this.length;
              var average = _this.data[key].average;
              var variance = _this.data[key].variance;
              for (var i =0; i < length; i++) {
                if (key === 'xData') {
                    array.push(i);
                } else {
                    array.push(_this.getNumber(average, variance));
                  }
              }
              return array;
            })
          },
          getUpdatedArray: function() {
            var _this = this;
            return Object.keys(this.data).map(function(key) {
              var array = _this.data[key].array;
              var length = _this.length;
              var average = _this.data[key].average;
              var variance = _this.data[key].variance;
              array.splice(1,1);
              if (key === 'xData') {
                  array.push(+array[array.length-1] + 1);
              } else {
                  array.push(_this.getNumber(average, variance))
              }
              return array;

            })
          },
          getNumber: function(average, variance) {
            return average + (0.5 - Math.random()* variance);
          }
        }
      }
  }
})();
