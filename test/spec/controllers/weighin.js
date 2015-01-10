'use strict';

describe('Controller: WeighinCtrl', function () {

  // load the controller's module
  beforeEach(module('quickstartFrontend'));

  var WeighinCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WeighinCtrl = $controller('WeighinCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
