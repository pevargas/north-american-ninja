'use strict';

describe('Directive: backgroundSrc', function () {

  // load the directive's module
  beforeEach(module('northAmericanNinjaApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<background-src></background-src>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the backgroundSrc directive');
  }));
});
