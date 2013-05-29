require.config({
    paths: {
        'jquery'    : 'vendor/jquery/jquery',
        'underscore': 'vendor/underscore-amd/underscore',
        'backbone'  : 'vendor/backbone-amd/backbone',
        'text'      : 'vendor/text/text',
        'Leaflet'   : 'vendor/leaflet/dist/leaflet',
        'jqueryform': 'vendor/jquery.form/jquery.form',
        'Handlebars': 'vendor/handlebars/handlebars',
        'templates' : 'templates'
    },
    shim: {
        'Leaflet': {
            exports: 'L'
        },
        'jqueryform': {
            deps: ['jquery']
        },
        'Handlebars': {
            exports: 'Handlebars'
        }
    }
});

require(['routers'], function (AppRouter) {
    'use strict';
    AppRouter.initialize();
});