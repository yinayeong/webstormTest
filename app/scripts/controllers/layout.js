'use strict';
/**
 * @ngdoc function
 * @name sampleApp.controller:LayoutCtrl
 * @description
 * # LayoutCtrl
 * Controller of the sampleApp
 */
app.controller('LayoutCtrl', function ($scope, $log) {

  this.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];

  $scope.test = 'test Scope';

  $scope.widgets = [{x: 0, y: 0, width: 1, height: 1}, {x: 0, y: 0, width: 3, height: 1}];

  $scope.options = {
    cellHeight: 200,
    verticalMargin: 10
  };
  $scope.addWidget = function () {
    var newWidget = {x: 0, y: 0, width: 1, height: 1};
    $scope.widgets.push(newWidget);
  };
  $scope.removeWidget = function (w) {
    var index = $scope.widgets.indexOf(w);
    $scope.widgets.splice(index, 1);
  };
  $scope.onChange = function (event, items) {
    $log.log("onChange event: " + event + " items:" + items);
  };
  $scope.onDragStart = function (event, ui) {
    $log.log("onDragStart event: " + event + " ui:" + ui);
  };
  $scope.onDragStop = function (event, ui) {
    $log.log("onDragStop event: " + event + " ui:" + ui);
  };
  $scope.onResizeStart = function (event, ui) {
    $log.log("onResizeStart event: " + event + " ui:" + ui);
  };
  $scope.onResizeStop = function (event, ui) {
    $log.log("onResizeStop event: " + event + " ui:" + ui);
  };
  $scope.onItemAdded = function (item) {
    $log.log("onItemAdded item: " + item);
  };
  $scope.onItemRemoved = function (item) {
    $log.log("onItemRemoved item: " + item);
  };



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
