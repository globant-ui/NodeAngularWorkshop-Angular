export class WorkingController {
    helloWorkshop = `Parece que todo funciona bien!`;
    helloWorkshop2 = `Nos vemos en el evento!`
}


export const WorkingComponent = {
    template: `
        <h1>{{ $ctrl.helloWorkshop }}</h1>
        <h1>{{ $ctrl.helloWorkshop2 }}</h1>
    `,
    controller: WorkingController,
}



angular.module('App', [])
    .component('itWorks', WorkingComponent);
