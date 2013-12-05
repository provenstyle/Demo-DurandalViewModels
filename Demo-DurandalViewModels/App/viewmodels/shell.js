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
                { route: 'vehicleVm', moduleId: 'viewmodels/vehicleVm', nav: true },
                { route: 'vehicleSelf', moduleId: 'viewmodels/vehicleSelf', nav: true },
                { route: 'vehiclePrototype', moduleId: 'viewmodels/vehiclePrototype', nav: true },
                { route: 'deferred', moduleId: 'viewmodels/deferred', nav: true },
                { route: 'observables', moduleId: 'viewmodels/observables', nav: true }
            ]).buildNavigationModel();
            
            return router.activate();
        }
    };
});