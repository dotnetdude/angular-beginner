'use strict';

/**
 * @ngdoc function
 * @name angularSeedApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the angularSeedApp
 */
angular.module('angularSeedApp')
  .controller('UserCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
