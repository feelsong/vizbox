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
                            data: {
                              columns: scope.rows,
                              colors: {
                                d1:'#73C2FB',
                                d2:'#0247FE'
                              }
                            },
                            x: 'x',
                            axis: {
                                y: {
                                    max: 100,
                                    min: 0,
                                    padding: {
                                        top: 5,
                                        bottom:0
                                    }
                                }
                            }
                        });

            scope.$watch('rows',function() {
                 chart.flow({columns:scope.rows,duration:3000, length:6});
                //  chart.load({columns:scope.rows,duration:3000});
            });

          }
      };

      return directive;
    }

})();
