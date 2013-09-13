/**
 * @license ng-gc-app-content-directive v0.1.0
 * (c) 2013-2013 GoCardless, Ltd.
 * https://github.com/gocardless-ng/ng-gc-app-content-directive.git
 * License: MIT
 */'use strict';

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

angular.module('app-content-template.html', []).run(function($templateCache) {
  $templateCache.put('app-content-template.html',
    '<div class="site__container"><main ng-transclude="" class="page__content"></main></div>');
});
