(function() {
  'use strict';

  angular
    .module('vizbox')
    .directive('barChart', barChart);

    /** @ngInject */

    function barChart() {
      var directive = {
                  restrict: 'E',
                  replace: false,
                  scope: { rows : '=rows', chartId : '=chartId'},
                  link: function(scope,element,attrs) {

                    var template = '<div id="'+scope.chartId+'"></div>';
                    element.html(template);

                    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                    var colors = ['#5cd3ff','#47ceff','#33c9ff','#1fc3ff','#00bbff','#00b4f5','#00a5e0','#0096cc','#0087b8','#0078a3','#00698f', '#005a7a'];
                    var chart = c3.generate({
                                  bindto: '#' + scope.chartId,
                                  data: {
                                    type:'bar',
                                    columns: scope.rows,
                                    colors: {
                                      d1: function(d) {
                                        return colors[d.index];
                                      }
                                    }
                                  },
                                  bar: {
                                    width: {
                                        ratio: 0.8
                                    }
                                  },
                                  axis: {
                                      y: {
                                          max:60,
                                          min: 0,
                                          padding: {top:0, bottom:0},
                                          tick: {
                                            format: function(d) {
                                              return d + 'k'
                                            }
                                          }
                                      },
                                      x: {
                                        type: 'category',
                                        tick: {
                                          format: function(d) {
                                            console.log('d',d);
                                            return months[d].slice(0, d !== 8 ? 3 : 4);
                                          }
                                        }
                                      }
                                  },
                                  legend: {
                                    show: false
                                  },
                                  padding: {
                                    top:10,
                                    right:20
                                  },
                                  grid: {
                                    y: {
                                        show: true
                                    }
                                  },
                                  tooltip: {
                                    format: {
                                      title: function(d) {
                                        return months[d];
                                      },
                                      value: function (x) {
                                        return '$ '+ d3.format(',')((1000 * x).toFixed(2));
                                      }
                                    }
                                  }
                              });

                    scope.$watch('rows',function() {
                      chart.load({columns: scope.rows});
                    });
              }
      };

      return directive;
    }

})();
