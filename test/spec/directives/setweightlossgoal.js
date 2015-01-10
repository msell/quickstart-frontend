'use strict';

describe('Directive: setWeightLossGoal', function () {

  // load the directive's module
  beforeEach(module('quickstartFrontend'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<set-weight-loss-goal></set-weight-loss-goal>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the setWeightLossGoal directive');
  }));
});
