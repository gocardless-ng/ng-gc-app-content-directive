(function(){ 'use strict';
'use strict';

angular.module('gc.appContent', [
  'app-content-template.html'
])
.directive('appContent', [
  function appContentDirective() {

    return {
      restrict: 'E',
      templateUrl: 'app-content-template.html',
      transclude: true,
      replace: true
    };

  }
]);

angular.module('app-content-template.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('app-content-template.html',
    '<div class="site__container"><main ng-transclude="" class="page__content"></main></div>');
}]);

})();