export class App {
    constructor() {
    }

    configureRouter(config, router) {
        config.title = 'My Budget';
        config.map([
            {route: '', moduleId: './views/main', title: 'Main'}
        ]);
    }
}
