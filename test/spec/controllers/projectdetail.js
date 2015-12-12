'use strict';

describe('Controller: ProjectdetailCtrl', function () {

  // load the controller's module
  beforeEach(module('northAmericanNinjaApp'));

  var ProjectdetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProjectdetailCtrl = $controller('ProjectdetailCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProjectdetailCtrl.awesomeThings.length).toBe(3);
  });
});
