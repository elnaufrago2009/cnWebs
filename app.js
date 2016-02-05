'use strict';

var app = angular.module('cnWebs', [
    'ui.router',
    'ui.bootstrap',
    'firebase',
    'infinite-scroll'
  ]);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider){
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
  .state('inicio', {
    url: '/',
    views: {
      'header': { templateUrl: 'layout/theme/header.html' },
      'contenido': { templateUrl: 'layout/inicio/index.html', controller: 'inicioCtrl' },
      'footer': { templateUrl: 'layout/theme/footer.html' }      
    }
  })
})

