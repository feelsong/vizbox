(function() {
  'use strict';

  angular
    .module('vizbox')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main',
        resolve: {
                  'geoLocation': [
                  '$http',
                      function($http) {
                          return $http.get('app/data/us.json')
                            .success(function (response) {
                              return response.data;

                            })
                      }
                  ]
                }
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
