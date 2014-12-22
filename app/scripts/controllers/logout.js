'use strict';

angular.module('meanApp')
    .controller('LogoutCtrl', function ($auth, $state) {
        $auth.logout();
        $state.go('main');
    });