define(['plugins/router', 'durandal/app'], function (router, app) {
    return {
        router: router,
        search: function() {
            //It's really easy to show a message box.
            //You can add custom options too. Also, it returns a promise for the user's response.
            app.showMessage('Search not yet implemented...');
        },
        activate: function () {
            router.map([
                { route: '', title:'Welcome', moduleId: 'viewmodels/welcome', nav: true },
                { route: 'singleton', moduleId: 'viewmodels/singleton', nav: true },
                { route: 'constructor', moduleId: 'viewmodels/constructor', nav: true },
                { route: 'prototype', moduleId: 'viewmodels/prototype', nav: true },
                { route: 'revealingPrototype', moduleId: 'viewmodels/revealingPrototype', nav: true },
                { route: 'revealingModule', moduleId: 'viewmodels/revealingModule', nav: true },
                { route: 'revealingModuleWithObservables', moduleId: 'viewmodels/revealingModuleWithObservables', nav: true }
            ]).buildNavigationModel();
            
            return router.activate();
        }
    };
});