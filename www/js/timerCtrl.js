angular.module('starter.timerCtrl', [])

.controller('TimerCtrl', ['$scope', '$interval', '$timeout', '$cordovaVibration',function($scope, $interval, $timeout, $cordovaVibration) {

  $scope.Bcolor = "blue";

  $scope.SetStyle = function () {
     $scope.CustomStyle = {
       'background-color': $scope.BColor,
     };
   };

  $scope.toggle = function() {
    $cordovaVibration.vibrate( 2000 );
  };

  $scope.hr  = '00';
  $scope.min = '00';
  $scope.sec = '00';

  $scope.playTimer = function(h, m) {



console.log("playtimer");

  if( $scope.hr  !== '00' || $scope.min !== '00' || $scope.sec !== '00') {
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
            $scope.SetStyle();
            $interval.cancel($scope.timerPromise);
            // $scope.toggle();
            console.log("END TIMER");
          }
        }
      }
      $scope.addLeadZero();
    }, 1000);
  }
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