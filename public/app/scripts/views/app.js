define([
        'backbone',
        '../views/sidebarView',
        '../collections/placesCollection',
        '../views/mapView',
        '../model/mapModel',
        '../views/headerView'
    ], function (Backbone, SidebarView, PlacesCollection,
                 MapView, MapModel, HeaderView) {
        'use strict';

        var Routes = Backbone.Router.extend({
            routes: {
                '' : 'homepage'
            },

            initialize: function () {
                this.placesCollection = new PlacesCollection();
                this.map = new MapModel();

                new MapView({ model: this.map }).render();
                new HeaderView({ model: this.map });
            },

            homepage: function () {
                var places = this.placesCollection.fetch(),
                    self   = this;

                places.done(function () {
                    var sidebarView = new SidebarView({
                        collection: self.placesCollection
                    });

                    sidebarView.render();
                });
            }
        });

        return Routes;
    });