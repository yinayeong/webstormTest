'use strict';

/**
 * @ngdoc function
 * @name sampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sampleApp
 */

app.controller('MainCtrl', function ($scope) {
  this.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma', 
  ];

  $scope.test = 'test Scope';

  this.memoryUsageOption = {
    "tooltip": {"show": true},
    "legend": {"data": ["UI"]},
    "xAxis": [{
      "type": "time",
      "splitNumber": "10"
    }],
    "yAxis": [{"type": "value"}],
    "series": [{
      "name": "UI",
      "type": "line",
      "data": [[new Date().getTime(), 10],
        [new Date().getTime() + 10000, 15],
        [new Date().getTime() + 20000, 20],
        [new Date().getTime() + 30000, 26],
        [new Date().getTime() + 40000, 15],
        [new Date().getTime() + 50000, 20],
        [new Date().getTime() + 60000, 25],
        [new Date().getTime() + 70000, 28]]
    }]
  };

  this.receivedOpOptions = {
    "tooltip": {"show": true},
    "legend": {"data": ["UI", "UIQRY", "BIZ1"]},
    "xAxis": [{
      "type": "category",
      "data": ["1일", "2일", "3일", "4일"]
    }],
    "yAxis": [{"type": "value"}],
    "series": [{
      "name": "UI",
      "type": "line",
      "data": [5, 20, 40, 30]
    }, {
      "name": "UIQRY",
      "type": "line",
      "data": [100, 22, 35, 67]
    }, {
      "name": "BIZ1",
      "type": "line",
      "data": [16, 98, 46, 25]
    }]
  };
});
