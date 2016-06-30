export class CommentsController {
    commentField = '';

    constructor ($routeParams, $route, ApiService) {
        this.routeParams = $routeParams;
        this.route = $route;
        this.ApiService = ApiService;
    }

    onSubmit () {
        let trackId = this.routeParams.trackId;
        this.ApiService.postCommentForTrack(trackId, {
            message: this.commentField
        })
        .then(response => {
            this.route.reload();
            return response.data;
        });
    }
}


export const CommentsComponent = {
    templateUrl: '/components/app/views/comments.html',
    controller: CommentsController,
    controllerAs: '$ctrl',
    bindings: {
        data: '=',
    }
}
