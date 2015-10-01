/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('vizbox')
    .constant('moment', moment)
    .constant('c3', c3)
    .constant('topojson', topojson);

})();
