(function() {
    'use strict';

    beforeEach(module('notes'));

    describe('The localStorage Service ',function() {
        var localStorageService, $window, sandbox;

        beforeEach(inject(function(_localStorageService_, _$window_) {
            localStorageService = _localStorageService_;
            $window = _$window_;

            console.info("BEFORE");

            sandbox = sinon.sandbox.create();
        }));

        afterEach(function() {
          sandbox.restore();
        });

        describe('.supportsStorage()', function() {
            it('returns true f localStorage is supported', function() {
              console.info();
              expect(localStorageService.supportsStorage()).toEqual(true);
            });
            it('return false if localStorage is not supported', function() {
              spyOn($window, 'hasOwnProperty').returns(false);
              expepect(localStorageService.supportsStorage()).toEqual(false);
            });
        });

    });

})();
