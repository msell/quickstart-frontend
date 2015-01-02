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

    $scope.weighIns = [{'weight':250, 'date':'2014-01-01T13:15:34.441Z'},
                      {'weight':242, 'date':'2014-01-08T13:15:34.441Z'},
                       {'weight':240, 'date':'2014-01-16T13:15:34.441Z'},
                       {'weight':233, 'date':'2014-01-22T13:15:34.441Z'},
                       {'weight':237, 'date':'2014-01-30T13:15:34.441Z'},
                       {'weight':233, 'date':'2014-02-05T13:15:34.441Z'},
                       {'weight':229, 'date':'2014-02-12T13:15:34.441Z'}                       
                      ]
//        $http.get(configuration.apiUrl + 'weighIn').success(function (weighIns) {
//            $scope.weighIns = weighIns;
//        }).error(function (err) {
//            alert('warning', 'unable to get weighins', err.message);
//        })
    });