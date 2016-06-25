import 'angular-route';

import {bands} from './services/mock-data';



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
                // use resolve to to pass data to the template under $resolve
                data: () => new Promise(resolve => resolve(bands)), // mock data
            },
        })
        .when('/band/:bandId/', {
            templateUrl: '/components/app/views/band-detail.html',
            resolve: {
                // use resolve to to pass data to the template under $resolve
            },
        })
        .when('/band/:bandId/album/:albumId/', {
            templateUrl: '/components/app/views/band-detail.html',
            resolve: {
                // use resolve to to pass data to the template under $resolve
            },
        })
        .when('/band/:bandId/album/:albumId/track/:trackId/', {
            templateUrl: '/components/app/views/band-detail.html',
            resolve: {
                // use resolve to to pass data to the template under $resolve
            },
        });
}
