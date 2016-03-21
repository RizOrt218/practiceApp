angular.module('starter.services', [])

.service('GuestService', function(){

  function GuestService() {
    this.guestList = [
    {name : 'Riz'}, {name : 'Dave'}, {name : 'Joe'}, {name : 'Ray'}, {name : 'Chris'}, {name : 'Lane'}, {name : 'Dev'}, {name : 'League'},
    ];
  }

  this.getGuestList = function () {
    return guestList;
  };

})

.service('TimeService', ['$http', function($http) {
  // Might use a resource here that returns a JSON array

  var inputTime = [];

  this.beginCountdown = function (time) {
    console.log("consoleLoggingServices", services);
      return $http.get('#/dash');
    };

}]);
