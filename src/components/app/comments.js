export class CommentsController {
    commentField = '';

    constructor ($routeParams) {
        this.routeParams = $routeParams;
    }

    onSubmit () {
        let trackId = this.routeParams.trackId;
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
