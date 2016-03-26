angular.module('starter.controllers', ['firebase', 'ngCordova'])

.controller('GuestCtrl', ['$scope','GuestService', function($scope, GuestService){

}])


//controller for "start" and "go" button in tab-home
.controller("ListCtrl", ['$scope', '$firebaseArray', '$location', 'TimeService',  function($scope, $firebaseArray,$location, TimeService) {


}])

.controller('CreateController', function($scope) {})


.controller('DashCtrl', ['$scope', '$ionicPopover', function($scope, $ionicPopover) {


  $scope.setColor = function () {
    return {"background-color": "pink"};
  };

  $scope.resetColor = function() {
    return {"background-color": "white"};

  };

  $scope.event = [];

  $scope.addEvent = function () {
    console.log("consoleLogging1", $scope.event);
    // return $scope.event;
    $scope.event.push({
      'name': $scope.event
      });
    console.log("consoleLogging2", $scope.event);

  };
    console.log("consoleLogging3", $scope.event);


  //>>>>>>>>>>>> POPOVER EVENT

  $ionicPopover.fromTemplateUrl('inputCreateForm.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popover = popover;
  });

  $scope.openPopover = function($event) {
    $scope.popover.show($event);
  };
  $scope.closePopover = function() {
    $scope.popover.hide();
  };
  //Cleanup the popover when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });
  // Execute action on hide popover
  $scope.$on('popover.hidden', function() {
    // Execute action
  });
  // Execute action on remove popover
  $scope.$on('popover.removed', function() {
    // Execute action
  });
}])

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
