'use strict';

describe('Controller: ExpenseCtrl', function () {

  // load the controller's module
  beforeEach(module('nspenderApp'));

  var ExpenseCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExpenseCtrl = $controller('ExpenseCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
