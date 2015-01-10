'use strict';

angular.module('quickstart-frontend')
    .controller('LogoutCtrl', function ($auth, $state) {
        $auth.logout();
        $state.go('main');
    });