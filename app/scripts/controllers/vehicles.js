'use strict';

angular.module('meanApp')
    .controller('VehiclesCtrl', function ($scope, $http, API_URL, alert) {
        $http.get(API_URL + 'vehicles').success(function (vehicles) {            
            $scope.vehicles = vehicles;
        }).error(function (err) {
            alert('warning', 'unable to get vehicles', err.message);
        });

    });