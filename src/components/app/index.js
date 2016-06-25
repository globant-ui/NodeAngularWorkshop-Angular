import {EmptyListComponent} from './empty-list-component';
import {CommentsComponent} from './comments';
import {PaginationComponent} from './pagination';
import {TableListComponent} from './table-list';

import {routes} from './routes';
import {ApiService} from './services';


angular.module('App', ['ngRoute'])
    .config(routes)
    .service('ApiService', ApiService)
    .component('tableList', TableListComponent)
    .component('emptyListComponent', EmptyListComponent)
    .component('comments', CommentsComponent)
    .component('pagination', PaginationComponent);
