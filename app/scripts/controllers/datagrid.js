'use strict';

/**
 * @ngdoc function
 * @name sampleApp.controller:DatagridCtrl
 * @description
 * # DatagridCtrl
 * Controller of the sampleApp
 */
app.controller('DatagridCtrl', function ($scope) {
  this.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];

  $scope.test = 'test Scope';

});
