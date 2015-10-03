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
      var pieData = new pieDataCreator();
      pieData.setLength(6);
      pieData.setAverageAndVariance('d1',50,30);
      pieData.setAverageAndVariance('d2',25,20);
      pieData.setAverageAndVariance('d3',80,20);
      pieData.setAverageAndVariance('d4',25,5);
      $scope.pieRows = pieData.getData();

      $scope.pieInterval = $interval(function() {
        $scope.pieRows = pieData.getData();
      }, 2000);

      function pieDataCreator() {
        return {
          length: 0,
          data: {
            d1: {
              array: [],
              average: 0,
              variance: 0
            },
            d2: {
              array: [],
              average: 0,
              variance: 0
            },
            d3: {
              array: [],
              average: 0,
              variance: 0
            },
            d4: {
              array: [],
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
          getData: function() {
            var _this = this;
            return Object.keys(_this.data).map(function(key) {
              var array = [];
              array.push(key);
              var length = _this.length;
              var average = _this.data[key].average;
              var variance = _this.data[key].variance;
              for (var i =0; i < length; i++) {
                array.push(_this.getNumber(average, variance));
              }
              return array;
            })
          },
          getNumber: function(average, variance) {
            return average + (0.5 - Math.random()* variance);
          }
        }
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
      }, 8000);

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
