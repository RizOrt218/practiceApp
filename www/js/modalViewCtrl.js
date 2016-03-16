angular.module('starter.modalViewCtrl', ['ionic'])

.controller('modalController', function ($scope, $ionicModal) {

  $ionicModal.fromTemplateUrl('adminView.html', {
      id       : '1',
      scope    : $scope,
      animation: 'jelly'
    }).then(function(modal) {
      $scope.modal1 = modal;
    });

$ionicModal.fromTemplateUrl('guestView.html', {
    id       : '2',
    scope    : $scope,
    animation: 'jelly'
  }).then(function(modal) {
    $scope.modal2 = modal;
  });

  $scope.openModal = function(index) {
    switch (index) {
      case 1 : $scope.modal1.show();
                break;
      case 2 : $scope.modal2.show();
    }
  };

  $scope.closeModal = function(index) {
    switch (index) {
      case 1 : $scope.modal1.hide();
                break;
      case 2 : $scope.modal2.hide();
    }
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });

});