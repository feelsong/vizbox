(function() {
  'use strict';

  angular
    .module('vizbox')
    .directive('pieChart', pieChart);

    /** @ngInject */

    function pieChart() {
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
                              type:'pie',
                              colors: {
                                d1:'#73C2FB',
                                d2:'#1F75FE',
                                d3:'#0247FE',
                                d4:'#4F86F7'
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
