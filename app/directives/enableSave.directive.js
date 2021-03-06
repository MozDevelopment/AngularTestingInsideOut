(function() {
    'use strict';

    angular.module('notes')
            .directive('enableSaveOnEdit', enableSaveOnEdit);

            enableSaveOnEdit.$inject = ['$document'];

            function enableSaveOnEdit($document) {
                return {
                  restrict: 'A',
                  // link: saveOnEdit
                };

                function saveOnEdit(scope, element, attributes) {
                    scope.$parent.editor =  element[0];

                  element[0].addEventListener(function() {
                      scope.$apply(function() {
                        scope.parent.edite = true;
                    });
                  });
                }
            }//enableSaveOnEdit

})();
