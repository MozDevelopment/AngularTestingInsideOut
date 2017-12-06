(function() {
    // 'use strict';

    beforeEach(module('notes'));
    describe('The enableSaveOnEdit directive', function() {

      var $scope, $compile, testElement, $controller, sandbox;

        beforeEach(inject(function(_$compile_, _$rootScope_, _$controller_) {
            $scope = _$rootScope_.$new();
            $compile = _$compile_;
            $controller = _$controller_;
            console.info("EACH");
            console.info($controller);
            console.info("$SCOPE");
            // dump($scope.$parent);
            sanbox = sinon.sandbox.create();
        }));

        xit('stores the reference to the element in the parent scope', function() {
          $controller('NotesController', { $scope: $scope });
          testElement = $compile('<textarea ng-model="currentNote.content" enable-save-on-edit>  </textarea>');

          console.error($scope.$parent.editor);
          // console.log(testElement);
          expect($scope.$parent.editor.id).toEqual('testElement');
        });

    });
})();
