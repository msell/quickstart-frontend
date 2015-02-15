function ($scope, $modal, configuration) {
    'use strict'
    return {
        restrict: 'E',
        templateUrl: '../views/partials/setWeightLossGoal.html',
        controllerAs: 'goal',
        controller: function () {
            var vm = this;
            vm.currentDate = new Date();
            vm.endDate = new Date();
            vm.goalWeight = 0;
            vm.currentWeight = 0;

            vm.create = function () {

                var request = {
                    'startDate': vm.currentDate,
                    'endDate': vm.endDate,
                    'startWeight': vm.currentWeight,
                    'endWeight': vm.goalWeight
                };
                console.log(request);
                $http.post(configuration.apiUrl + 'weightLossGoal', request)
            };
        }
    }
};