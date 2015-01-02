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
    
    $scope.addEntry = function(){
        $scope.weighIns.push({'weight': $scope.weight, 'date': $scope.date});
    };
    
    $scope.weight = 0; // todo: default to last weigh in, add up/down control
    $scope.date = new Date();

        $scope.weighIns = [
            {
                'weight': 250,
                'date': '2015-01-02T04:45:14.370Z'
            },
            {
                'weight': 242,
                'date': '2015-01-02T04:45:14.370Z'
            },
            {
                'weight': 240,
                'date': '2015-01-02T04:45:14.370Z'
            },
            {
                'weight': 233,
                'date': '2015-01-02T04:45:14.370Z'
            },
            {
                'weight': 237,
                'date': '2015-01-02T04:45:14.370Z'
            },
            {
                'weight': 233,
                'date': '2015-01-02T04:45:14.370Z'
            }
                      ];

        //        $http.get(configuration.apiUrl + 'weighIn').success(function (weighIns) {
        //            $scope.weighIns = weighIns;
        //        }).error(function (err) {
        //            alert('warning', 'unable to get weighins', err.message);
        //        })
    });