'use strict';

/**
 * @ngdoc function
 * @name northAmericanNinjaApp.controller:ProjectdetailCtrl
 * @description
 * # ProjectdetailCtrl
 * Controller of the northAmericanNinjaApp
 */
angular.module('northAmericanNinjaApp')
  .controller('ProjectdetailCtrl', function ($scope, $routeParams) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.routeParams = $routeParams;
  });
