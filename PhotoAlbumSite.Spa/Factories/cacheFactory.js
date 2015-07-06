(function () {
    'use strict';

    var app = angular.module('photoAlbum');

    app.factory('photoAlbumCache', ['$cacheFactory', function ($cacheFactory) {

        return $cacheFactory('photoAlbumData');

    }]);
})();