angular.module('starter.controllers', [])

.controller('CreateController', function($scope) {})


.controller('DashCtrl', function($scope, $ionicPopover) {


  //>>>>>>>>>>>> POPOVER EVENT
  var templateGroup = '<ion-popover-view><label class="item item-input"><input type="text" placeholder="Create Event Name" ng-model="event.name"></label><label class="item item-input"><input type="text" placeholder="Create Passcode" ng-model="event.passcode"></label><label class="item item-input"><span class="input-label">Start Time</span><input type="time"></label><button id="startButton" class="button button-full button-positive" ng-click=" addGroup(event.name); openModal(1);">Start!</button></ion-popover-view>';

  $scope.popover = $ionicPopover.fromTemplate('templateGroup', {
    scope: $scope
  });

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
})

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
