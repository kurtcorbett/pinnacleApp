(function() {
  'use strict';
  angular.module('app.ui.directives', []).directive('uiTime', [
    function() {
      return {
        restrict: 'A',
        link: function(scope, ele) {
          var checkTime, startTime;
          startTime = function() {
            var h, m, s, t, time, today;
            today = new Date();
            h = today.getHours();
            m = today.getMinutes();
            s = today.getSeconds();
            m = checkTime(m);
            s = checkTime(s);
            time = h + ":" + m + ":" + s;
            ele.html(time);
            return t = setTimeout(startTime, 500);
          };
          checkTime = function(i) {
            if (i < 10) {
              i = "0" + i;
            }
            return i;
          };
          return startTime();
        }
      };
    }
  ]).directive('uiNotCloseOnClick', [
    function() {
      return {
        restrict: 'A',
        compile: function(ele, attrs) {
          return ele.on('click', function(event) {
            return event.stopPropagation();
          });
        }
      };
    }
  ]).directive('slimScroll', [
    function() {
      return {
        restrict: 'A',
        link: function(scope, ele, attrs) {
          return ele.slimScroll({
            height: attrs.scrollHeight || '100%'
          });
        }
      };
    }
  ]);

}).call(this);

//# sourceMappingURL=UIDirective.js.map
