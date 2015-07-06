(function () {

    var app = angular.module('photoAlbum');

    app.service('photoGridService', ['$q', '$http', function ($q, $http) {
        return {
            getUrlImageData: function (url, onSuccess) {
                var deferred = $q.defer();

                $http.get('http://localhost/PhotoAlbumSite.Api/api/Photo/Get?url=' + url)
                    .success(function (data) {
                        deferred.resolve(data);
                        if (onSuccess) {
                            onSuccess(data);
                        }
                    });

                return deferred.promise;
            }
        };
    }]);
})();