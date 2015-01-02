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
    
    $scope.date = new Date();

        $scope.weighIns = [
            {
                'weight': 250,
                'date': '2014-01-01'
            },
            {
                'weight': 242,
                'date': '2014-01-08'
            },
            {
                'weight': 240,
                'date': '2014-01-16'
            },
            {
                'weight': 233,
                'date': '2014-01-22'
            },
            {
                'weight': 237,
                'date': '2014-01-30'
            },
            {
                'weight': 233,
                'date': '2014-02-05'
            },
            {
                'weight': 229,
                'date': '2014-02-12'
            }
                      ];

        //        $http.get(configuration.apiUrl + 'weighIn').success(function (weighIns) {
        //            $scope.weighIns = weighIns;
        //        }).error(function (err) {
        //            alert('warning', 'unable to get weighins', err.message);
        //        })
    });