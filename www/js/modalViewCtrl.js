angular.module('starter.modalViewCtrl', ['ionic'])

.controller('ModalController', function ($scope, $ionicModal) {


  $ionicModal.fromTemplateUrl('templates/adminView.html', {
      id       : '1',
      scope    : $scope,
      animation: 'slide-in-right'
    }).then(function(modal) {
      $scope.modal1 = modal;
    });

$ionicModal.fromTemplateUrl('templates/guestView.html', {
    id       : '2',
    scope    : $scope,
    animation: 'slide-in-right'
  }).then(function(modal) {
    $scope.modal2 = modal;
  });

$ionicModal.fromTemplateUrl('inputCreateForm.html', {
    id       : '3',
    scope    : $scope,
    animation: 'slide-in-right'
  }).then(function(modal) {
    $scope.modal3 = modal;
  });

  $scope.openModal = function(index) {
    switch (index) {
      case 1 : $scope.modal1.show();
                break;
      case 2 : $scope.modal2.show();
                break;
      case 3 : $scope.modal3.show();
    }
  };

  $scope.closeModal = function(index) {
    switch (index) {
      case 1 : $scope.modal1.hide();
                break;
      case 2 : $scope.modal2.hide();
                break;
      case 3 : $scope.modal3.hide();
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