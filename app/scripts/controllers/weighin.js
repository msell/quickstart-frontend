'use strict';

/**
 * @ngdoc function
 * @name meanApp.controller:WeighinCtrl
 * @description
 * # WeighinCtrl
 * Controller of the meanApp
 */
angular.module('meanApp')
    .controller('WeighinCtrl', function ($scope, $http, configuration, alert, $auth, $state) {    
        
    if (!$auth.isAuthenticated()) {            
            $state.go('login');
        }

        $http.get(configuration.apiUrl + 'weighIn').success(function (weighIns) {
            $scope.weighIns = weighIns;
        }).error(function (err) {
            alert('warning', 'unable to get weighins', err.message);
        })
    });