'use strict';

/**
 * @ngdoc overview
 * @name sampleApp
 * @description
 * # sampleApp
 *
 * Main module of the application.
 */
var app = angular
  .module('sampleApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngECharts',
    'datatables',
    'gridstack-angular'
  ]);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    })
    .when('/datagrid', {
      templateUrl: 'views/datagrid.html',
      controller: 'DatagridCtrl',
      controllerAs: 'datagrid'
    })
    .when('/layout', {
      templateUrl: 'views/layout.html',
      controller: 'LayoutCtrl',
      controllerAs: 'layout'
    })
    .otherwise({
      redirectTo: '/'
    });
});
