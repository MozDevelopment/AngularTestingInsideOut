(function() {
//   'use strict';

  // describe(' a test for test', function() {
  //   it('can run a test', function() {
  //       expect(true).toEqual(true);
  //   });
  // });
  describe('the NotesController ', function() {

    var scope, $document, $timeout, localStorageService, uuid, sandbox, $controller;

    beforeEach(module('notes'));

    afterEach(function() {
        sandbox.restore();
    });

    describe('when Localstorage is not supproted', function() {
        beforeEach(inject(function($rootScope, _localStorageService_) {
          localStorageService = _localStorageService_;          //
          $scope = $rootScope.$new();
          sandbox = sinon.sandbox.create();
        }));
        beforeEach(inject(function(_$controller_) {
            // var support = sandbox.stub(localStorageService, 'supportsStorage').returns(false);
            var support = spyOn(localStorageService, 'supportsStorage').and.returnValue(false);

            $controller = _$controller_;
            $controller('NotesController', {
              $scope: $scope,
            });
        }));

        it('sets the localStorageSupported property is set to false', function() {
            expect($scope.localStorageSupported).toBeDefined();
            expect($scope.localStorageSupported).toEqual(false)
        });
    });

    describe('.hideModal()', function() {
      beforeEach(inject(function($controller) {
          $controller('NotesController', {$scope: $scope});
      }));

      describe('when the triggering element has the overlay class', function() {
        it('sets the showModal property to false', function() {
            var fakeEvent = {
                target: {
                    classList: {
                      contains: function() {  return true;  }
                    }
                }
            };

            $scope.showModal = false;

            $scope.hideModal(fakeEvent);

            expect($scope.showModal).toEqual(false);
        });
      });


    });
  });

})();
