/**
 * Created by matt on 11/15/14.
 */
angular.module('meanApp').config(function ($urlRouterProvider, $stateProvider, $httpProvider, $authProvider, API_URL) {

    // if none of these states fit, just go home
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('main', {
            url: '/',
            templateUrl: '/views/main.html'
        })

    .state('register', {
        url: '/register',
        templateUrl: '/views/register.html',
        controller: 'RegisterCtrl'
    })

    .state('login', {
        url: '/login',
        templateUrl: '/views/login.html',
        controller: 'LoginCtrl'
    })

    .state('vehicles', {
        url: '/vehicles',
        templateUrl: '/views/vehicles.html',
        controller: 'VehiclesCtrl'
    })

    .state('logout', {
        url: '/logout',
        controller: 'LogoutCtrl'
    });

    
    $authProvider.loginUrl = API_URL + 'auth/login';
    $authProvider.signupUrl = API_URL + 'auth/register';
    
    // if using express use these routes
//    $authProvider.loginUrl = API_URL + 'login';
//    $authProvider.signupUrl = API_URL + 'register';
    
    $authProvider.google({
        clientId: '293729951422-1aoar6i6acc23l8lrmb0m2dm9ommefq9.apps.googleusercontent.com',
        url: API_URL + 'auth/google'
    });
    
    $authProvider.facebook({
        clientId: '1503487916590538',
        url: API_URL + 'auth/facebook'
    });

    $httpProvider.interceptors.push('authInterceptor');
})
.constant('API_URL', 'http://localhost:1337/')
//.constant('API_URL', 'http://localhost:3000/')


.run(function ($window) {
    var params = $window.location.search.substring(1);

    if (params && $window.opener && $window.opener.location.origin === $window.location.origin) {
        var pair = params.split('=');
        var code = decodeURIComponent(pair[1]);

        $window.opener.postMessage(code, $window.location.origin);
    }
});