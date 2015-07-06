(function () {
    'use strict';

    var app = angular.module('photoAlbum');

    app.controller('photoGridController', ['$scope', 'photoAlbumCache', 'photoGridService', function ($scope, photoAlbumCache, photoGridService) {
        var vm = this;
        vm.message = 'photoGrid';

        vm.formInputs = {
            urlInput: null
        };

        vm.webSites = [];
        vm.images = [];

        function populateFromCache() {
            var currentCache = photoAlbumCache.get('photoAlbumData');

            if (currentCache) {
                vm.webSites = currentCache;

                for (var i = 0; i < vm.webSites.length; i++) {
                    getImageFromUrl(vm.webSites[i]);
                }
            }
        };

        function getImageFromUrl(url) {
            photoGridService.getUrlImageData(url, function (data) {
                if (data) {
                    if (data.errorMessage) {
                        alert(data.errorMessage);
                    } else {
                        vm.images.push(data.result);
                    }
                }
            });
        };

        vm.addWebSite = function (url) {
            if (url && url != '') {
                vm.webSites.push(url);
                photoAlbumCache.put('photoAlbumData', vm.webSites);
                getImageFromUrl(url);

                vm.formInputs.urlInput = '';
            }
        };

        populateFromCache();

    }]);
})();