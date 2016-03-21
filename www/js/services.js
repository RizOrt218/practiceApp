angular.module('starter.services', [])


.service('TimeService', ['$http', function($http) {
  // Might use a resource here that returns a JSON array

  var inputTime = [];

  this.beginCountdown = function (time) {
    console.log("consoleLoggingServices", services);
      return $http.get('#/dash');
    };

}]);
