'use strict';

angular.module('bodegasPalmarApp', [
    'bodegasPalmarApp.constants',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'satellizer',
    'ngMessages'
  ])
  .constant("API","http://10.72.198.200:25956/BodegasPalmar")
  .config(function($urlRouterProvider, $locationProvider,$authProvider,API) {
    $urlRouterProvider.otherwise('/');
    //Config satellizer
    $authProvider.loginUrl = API +'/api/auth/login';
    $authProvider.tokenName='token';
    $authProvider.tokenPrefix='bodegasPalmarApp';
    $locationProvider.html5Mode(true);
  });
