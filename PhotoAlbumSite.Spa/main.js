var app = angular.module('photoAlbum', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/photoAlbum', {
            templateUrl: 'Sites/photoGrid/photoGrid.html'
        })
        .when('/about', {
            templateUrl: 'Sites/aboutPage/aboutPage.html'
        })
        .otherwise({
            templateUrl: 'Sites/LandingPage/landingPage.html'
        });
});