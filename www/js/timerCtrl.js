angular.module('starter.timerCtrl', [])

.directive('bltCountdownTimer', ['$interval', '$timeout', function($interval, $timeout) {
  var timers = {};

    var getLocalizedEndDate = function(endDate) {
      var utc = Date.parse(endDate),
        offset = new Date().getTimezoneOffset();

      return utc - offset;
    };

    var buildTemplate = function(timeType) {
      return "<div id='" + timeType + "' class='timer'><div class='l face'><div class='spinner' ng-style=\"style." + timeType + "\"></div><div class='track'></div></div><div class='r face'><div class='spinner' ng-style=\"style." + timeType + "\"></div><div class='track'></div></div><div class='time'><p><strong>{{" + timeType + "}}</strong><br/><span>" + timeType + "</span></p></div></div>";
    };

    var getTemplates = function(el, attrs) {
      var temp = "";

      if (attrs.type.indexOf('d') != -1) {
        temp += buildTemplate('days');
        timers.days = true;
      }
      if (attrs.type.indexOf('h') != -1) {
        temp += buildTemplate('hrs');
        timers.hours = true;
      }
      if (attrs.type.indexOf('m') != -1) {
        temp += buildTemplate('mins');
        timers.minutes = true;
      }
      if (attrs.type.indexOf('s') != -1) {
        temp += buildTemplate('secs');
        timers.seconds = true;
      }

      return temp;
    };

    var updateTimes = function(scope) {
      var timeToDate = new Date(getLocalizedEndDate(scope.futureDate) - Date.now());
      scope.secsToDate = parseInt(timeToDate / 1000);

      if (scope.secsToDate <= 0) {
        scope.secs = 0;
        scope.hrs = 0;
        scope.mins = 0;
        scope.days = 0;
        return;
      }

      if (timers.seconds && !timers.minutes && !timers.hours && !timers.days) {
        scope.secs = scope.secsToDate;
      } else {
        scope.secs = timeToDate.getSeconds();
      }

      if (timers.minutes && !timers.hours && !timers.days) {
        scope.mins = parseInt(scope.secsToDate / 60);
      } else {
        scope.mins = timeToDate.getMinutes();
      }

      if (timers.days) {
        scope.days = Math.floor(scope.secsToDate / 60 / 60 / 24);
      }

      if (timers.hours && !timers.days) {
        scope.hrs = parseInt(scope.secsToDate / 60 / 60);
      } else {
        scope.hrs = parseInt(scope.secsToDate / 60 / 60) - (24 * scope.days);
      }
        // console.log("consoleLogging", timeToDate);

    };

    var killSpinner = function(spinner, type) {
      var killCmd = {
        '-webkit-animation-name': 'none',
        '-moz-animation-name': 'none',
        'animation-name': 'none',
        'clip': 'auto'
      };

      spinner[type] = killCmd;
    }

    var updateSpinners = function(scope) {

      if (scope.secs <= 0) {
        killSpinner(scope.style, 'secs')
      } else {
        scope.style.secs = {
          '-webkit-animation-delay': '-' + (60 - scope.secs) + 's'
        };
      }

      if (scope.mins <= 0) {
        killSpinner(scope.style, 'mins')
      } else {
        scope.style.mins = {
          '-webkit-animation-delay': '-' + (3600 - (scope.mins * 60)) + 's'
        };
      }

      if (scope.hrs <= 0) {
        killSpinner(scope.style, 'hrs')
      } else {
        scope.style.hrs = {
          '-webkit-animation-delay': '-' + (86400 - (scope.hrs * 60 * 60)) + 's'
        };
      }

      if (scope.days <= 0) {
        killSpinner(scope.style, 'days')
      } else {
        scope.style.days = {
          '-webkit-animation-delay': '-' + (2419200 - parseInt(scope.timeToDate / 1000)) + 's'
        };
      }
    };

    return {
      template: getTemplates,
      scope: {
        futureDate: "@date",
        type: "@type"
      },
      link: function(scope) {
        scope.style = {};

        updateTimes(scope);
        updateSpinners(scope);

        var timer = $interval(function() {
          if (scope.secsToDate <= 0) {
            $interval.cancel(timer);
          } else {
            updateTimes(scope);
            updateSpinners(scope);
          }
        }, 1000);

        scope.$on('$destroy', function() {
          $interval.cancel(timer);
        });
      }
    };

  }])

  .controller('testCtrl', function($scope, $document) {

       $scope.changeColor = function (){
        console.log("turn color");
        $scope.backgroundstyle= "red";
      };

      $scope.d = Date.now();
      $scope.newD = new Date($scope.d + 104400000);
      $scope.dert = ($scope.newD.getMonth()+1) + '/' + $scope.newD.getDate() + '/' + $scope.newD.getFullYear();
  });
