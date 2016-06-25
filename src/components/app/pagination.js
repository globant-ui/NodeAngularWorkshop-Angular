export class PaginationController {
    originalData = [];
    currentPage = 1;
    lastPage = null;
    pageSize = 10;

    constructor () {
        console.log('PaginationController this.data', this.data);
        this.originalData = this.data.length ? this.data : this.originalData;
        this.pageSize = this.size || this.pageSize;
        this.lastPage = Math.ceil(this.originalData.length / this.pageSize);
    }

    $onInit() {
        this.paginate();
    }
}



export const PaginationComponent = {
  templateUrl: '/components/app/views/pagination.html',
  controller: PaginationController,
  controllerAs: '$ctrl',
  bindings: {
      data: '=',
      size: '<',
  },
}
