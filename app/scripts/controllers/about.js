/* jshint latedef:nofunc */
'use strict';

/**
 * @ngdoc function
 * @name northAmericanNinjaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the northAmericanNinjaApp
 */
angular.module('northAmericanNinjaApp')
  .controller('AboutCtrl', AboutCtrl);

function AboutCtrl ($scope, $uibModal) {
  this.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];

  $scope.openModal = function openModal(jsonFile) {
    $uibModal.open({
      animation: true,
      templateUrl: '../views/partials/modal.html',
      controller: 'ModalInstanceCtrl',
      size: 'lg',
      resolve: {
        items: function() { return $scope.awesomeThings; },
        source: function() { return jsonFile; }
      }
    });
  };
}
