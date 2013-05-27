define([
        'backbone',
        '../collections/places',
        '../views/sidebar',
        '../views/map',
        '../views/header'
    ], function (Backbone, placesCollection, sidebarView) {
        'use strict';

        var Routes = Backbone.Router.extend({
            routes: {
                '': 'homepage'
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