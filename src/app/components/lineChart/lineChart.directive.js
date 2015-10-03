(function() {
  'use strict';

  angular
    .module('vizbox')
    .directive('lineChart', lineChart);

    /** @ngInject */

    function lineChart() {
      var directive = {
          restrict: 'E',
          replace: true,
          scope: { rows : '=rows', chartId : '=chartId'},
          link: function(scope,element,attrs) {

            var template = '<div id="'+scope.chartId+'"></div>';
            element.html(template);

            var chart = c3.generate({
                            bindto: '#' + scope.chartId,
                            padding: {
                              top:10,
                              right:20
                            },
                            data: {
                              x: 'x',
                              columns: scope.rows,
                              colors: {
                                d1:'#0247FE',
                                d2:'#73C2FB'
                              }
                            },

                            axis: {
                                x: {
                                  type:'indexed',
                                  tick: {
                                    fit: false
                                  }
                                },
                                y: {
                                    max: 80,
                                    min: 0,
                                    padding: {
                                        top: 0,
                                        bottom:0
                                    },
                                    tick: {
                                      outer:false,
                                      count:5,
                                      fit:true
                                    }
                                }

                            },
                            grid: {
                               x: {
                                   show: true
                               },
                               y: {
                                   show: true
                               }
                           }
                        });

            scope.$watch('rows',function() {
                chart.load({columns:scope.rows,duration:1500});
            });

          }
      };

      return directive;
    }

})();
