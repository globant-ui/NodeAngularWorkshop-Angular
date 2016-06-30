import 'angular-route';



export function routes($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false,
        rewriteLinks: true,
    });

    $routeProvider
        .otherwise('/')
        .when('/', {
            templateUrl: '/components/app/views/index.html',
            resolve: {
                data: ApiService => ApiService.getBands()
            },
        })
        .when('/band/:bandId/', {
            templateUrl: '/components/app/views/band-detail.html',
            resolve: {
                data: ($route, ApiService) =>
                    ApiService.getBand($route.current.params.bandId),
            },
        })
        .when('/band/:bandId/album/:albumId/', {
            templateUrl: '/components/app/views/band-detail.html',
            resolve: {
                data: ($route, ApiService) =>
                    ApiService.getBand($route.current.params.bandId),
                selectedAlbum: ($route, ApiService) =>
                    ApiService.getAlbum($route.current.params.albumId),
            },
        })
        .when('/band/:bandId/album/:albumId/track/:trackId/', {
            templateUrl: '/components/app/views/band-detail.html',
            resolve: {
                data: ($route, ApiService) =>
                    ApiService.getBand($route.current.params.bandId),
                selectedAlbum: ($route, ApiService) =>
                    ApiService.getAlbum($route.current.params.albumId),
                comments: ($route, ApiService) =>
                    ApiService.getCommentsForTrack($route.current.params.trackId),
            },
        });
}
