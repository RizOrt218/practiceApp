angular.module('starter.services', [])

.factory('MathService', function() {
  console.log("this working factory");
            var factory = {};

            factory.multiply = function(a, b) {
               return a * b;
            };
            return factory;
         })

.service('CalcService', function(MathService){
            this.square = function(a) {
               return MathService.multiply(a,a);
            };
         })


.service('time', ['$http', function($http) {
  // Might use a resource here that returns a JSON array

  var inputTime = [];

  this.adminTimeInput = function () {
    console.log("consoleLogging", services);
      return $http.get('/admintTab');
    };

}]);
