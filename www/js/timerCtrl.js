angular.module('starter.timerCtrl', [])


  .controller('CalcController', function($scope, CalcService) {
            $scope.square = function() {
               $scope.result = CalcService.square($scope.number);
            };
         })

  .controller('testCtrl', ['$scope', '$interval', function($scope, $interval) {
    $scope.minutes = 0;
    $scope.seconds = $scope.minutes * 60;
    $scope.$watch('minutes', function() {
      $scope.seconds = $scope.minutes * 60;
    });

    $scope.countdown = function() {
      if ($scope.seconds <= 0) return;
      $scope.countdownInterval = $interval(function() {
        if ($scope.seconds <= 0) {
          $interval.cancel(countdownInterval);
        }
        $scope.seconds--;
      }, 1000);
    };

    $scope.stop = function() {
       $interval.cancel($scope.countdownInterval);
    };


  }


])

  .filter('secondsToDate', [
  function() {
    return function(seconds) {
      return new Date(1970, 0, 1).setSeconds(seconds);
    };
  }
]);