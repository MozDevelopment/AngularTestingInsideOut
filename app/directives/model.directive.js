(function() {
  'use strict';

  angular.module('notes')
        .controller('modal', modal);

        function modal() {
          return {
            restrict: 'E',
            temlapateUrl: 'templates/modal.html'
          };
        }

})();
