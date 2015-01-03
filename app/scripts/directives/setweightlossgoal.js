'use strict';

/**
 * @ngdoc directive
 * @name meanApp.directive:setWeightLossGoal
 * @description
 * # setWeightLossGoal
 */
angular.module('meanApp')
    .directive('setWeightLossGoal', function () {
        return {            
            restrict: 'E',
            templateUrl: '../views/partials/setWeightLossGoal.html'
        }
    });