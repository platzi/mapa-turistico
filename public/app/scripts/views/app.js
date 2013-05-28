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



// define([
//         'backbone',
//         '../views/sidebarView',
//         '../collections/placesCollection'
//     ], function (Backbone, SidebarView, PlacesCollection) {
//         'use strict';

//         var Routes = Backbone.Router.extend({
//             routes: {
//                 '': 'homepage'
//             },

//             initialize: function () {
//                 this.placesCollection = new PlacesCollection();
//                 this.placesCollection.fetch();
//             },

//             homepage: function () {
//                 var sidebarView = new SidebarView({
//                     collection: this.placesCollection
//                 });
//                 sidebarView.render();
//             }
//         });

//         return Routes;
//     });