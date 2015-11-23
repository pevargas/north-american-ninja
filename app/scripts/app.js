'use strict';

/**
 * @ngdoc overview
 * @name northAmericanNinjaApp
 * @description
 * # northAmericanNinjaApp
 *
 * Main module of the application.
 */
angular
  .module('northAmericanNinjaApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'ModalCtrl',
        controllerAs: 'about'
      })
      .when('/code', {
        templateUrl: 'views/code.html',
        controller: 'ModalCtrl',
        controllerAs: 'code'
      })
      .when('/resume', {
        templateUrl: 'views/resume.html',
        controller: 'ResumeCtrl',
        controllerAs: 'resume'
      })
      .when('/design', {
        templateUrl: 'views/design.html',
        controller: 'ModalCtrl',
        controllerAs: 'design'
      })
      .when('/photography', {
        templateUrl: 'views/photography.html',
        controller: 'ModalCtrl',
        controllerAs: 'photography'
      })
      .when('/music', {
        templateUrl: 'views/music.html',
        controller: 'MusicCtrl',
        controllerAs: 'music'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
