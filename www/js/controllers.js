angular.module('starter.controllers', ['firebase'])

.controller('GuestCtrl', ['$scope','GuestService', function($scope, GuestService){

}])

.controller('TimerCtrl', ['$scope', '$interval', '$timeout', function($scope, $interval, $timeout) {

  $scope.hr  = '00';
  $scope.min = '00';
  $scope.sec = '00';

  $scope.playTimer = function(h, m) {

console.log("playtimer");
    $scope.timerPromise = $interval(function() {
      console.log("seconds", $scope.sec);
      $scope.sec--;

      if( $scope.sec < 0 ) {
        if( $scope.min == '00' ) {
          if( $scope.hr > 0 ) {
            $scope.min = 5;
            $scope.hr--;
            $scope.min++;
          }
        }
      }

      if( $scope.sec < 0 ) {
        if( $scope.min > 0 ) {
          $scope.sec = 5;
          $scope.min--;
        }
      }


      if($scope.sec == '00') {
        if($scope.min == '00' ) {
          if ( $scope.hr == '00' ) {
            console.log("END TIMER");
            $interval.cancel($scope.timerPromise);
          }
        }
      }
      $scope.addLeadZero();
    }, 1000);

  };

  function sevenMin () {
    $scope.addLeadZero();
    $scope.min = 7;

  }


  $scope.setColor = function () {
    $scope.pink = 'PINK';
    return $scope.pink;
  };


  $scope.addLeadZero = function () {
    if( $scope.hr || $scope.min || $scope.sec < 10 || 'null') {
      $scope.sec = ('0' + $scope.sec).substr(-2);
      $scope.min = ('0' + $scope.min).substr(-2);
      $scope.hr = ('0' + $scope.hr).substr(-2);
    }
  };

  $scope.incHr = function() {
    $scope.hr++;

    if($scope.hr > 59) {
      $scope.hr = '00';
    }
  };

  $scope.decHr = function() {
    $scope.hr--;

    if ($scope.hr < 0) {
      $scope.hr = 59;
    }
  };

  $scope.incmin = function() {
    $scope.min++;

    if($scope.min > 59) {
      $scope.min = '00';
    }
  };

  $scope.decmin = function() {
    $scope.min--;
    if ($scope.min < 0) {
      $scope.min = 59;
    }
  };

  $scope.pauseTimer = function () {

  };

  $scope.stopTimer = function () {
    $interval.cancel($scope.timerPromise);
    $scope.hr = '00';
    $scope.min = '00';
    $scope.sec = '00';
  };



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
