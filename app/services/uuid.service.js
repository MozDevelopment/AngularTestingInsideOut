(function() {
  'use strict';

  angular.module('notes')
        .factory('uuid', uuid);
 
        function uuid() {
          return {
            generate : function() {
              var dateT = new Date().getTime();
              if(window.performance && typeof(window.performance.now === "function")) {
                dateT += window.performance.now();
              }

              var uuid = 'xxxxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                  var r = (dateT + Math.random() * 16) % 16 | 0;
                  dateT = Math.floor(dateT / 16);
                  return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
              });
              return uuid;
            }
          };
        }//uuid
})();
