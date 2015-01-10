'use strict';

angular.module('quickstartFrontend')
    .controller('VehiclesCtrl', function ($scope, $http, configuration, alert) {
        $http.get(configuration.apiUrl + 'vehicles').success(function (vehicles) {            
            $scope.vehicles = vehicles;
        }).error(function (err) {
            alert('warning', 'unable to get vehicles', err.message);
        });

    });