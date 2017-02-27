'use strict';

angular.module('groupdApp',['ngAnimate','ngCookies','ngMessages','ngResource','ngRoute','ngSanitize'])
.config(function($routeProvider, $locationProvider){
    $routeProvider
      .when('/', {
        templateUrl: '/views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: '/views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl',
        controllerAs: 'signup'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .otherwise({
        redirectTo: '/'
      });

      $locationProvider.hashPrefix('');
});