'use strict';

describe('Controller: DatagridCtrl', function () {

  // load the controller's module
  beforeEach(module('sampleApp'));

  var DatagridCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DatagridCtrl = $controller('DatagridCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DatagridCtrl.awesomeThings.length).toBe(3);
  });
});
