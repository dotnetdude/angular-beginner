'use strict';

/**
 * @ngdoc function
 * @name angularSeedApp.controller:MycontrollerCtrl
 * @description
 * # MycontrollerCtrl
 * Controller of the angularSeedApp
 */
angular.module('angularSeedApp')
  .controller('MycontrollerCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
