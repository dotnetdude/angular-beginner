'use strict';

/**
 * @ngdoc filter
 * @name angularSeedApp.filter:myFilter
 * @function
 * @description
 * # myFilter
 * Filter in the angularSeedApp.
 */
angular.module('angularSeedApp')
  .filter('myFilter', function () {
    return function (input) {
      return 'myFilter filter: ' + input;
    };
  });
