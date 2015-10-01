/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('vizbox')
    .constant('moment', moment)
    .constant('d3', d3)
    .constant('c3', c3)
    .constant('topojson', topojson);

})();
