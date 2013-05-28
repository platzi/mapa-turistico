define([
        'backbone',
        '../collections/places',
        '../views/sidebar',
        '../views/map',
        '../views/addPlace',
        '../views/header'
    ], function (Backbone, placesCollection, sidebarView, mapView, AddPlace) {
        'use strict';

        var Routes = Backbone.Router.extend({
            routes: {
                '': 'homepage'
            },

            initialize: function () {
                mapView.render();
                new AddPlace();
            },

            homepage: function () {
                placesCollection.fetch({
                    success: function (collection) {
                        sidebarView.addPlaces(collection);
                    }
                });
            }
        });

        return Routes;
    });