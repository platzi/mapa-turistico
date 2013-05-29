define([
        'backbone',
        'underscore',
        '../views/placesView'
    ], function (Backbone, _, PlaceView) {
        'use strict';

        var SidebarView = Backbone.View.extend({
            el: '#placeList',

            initialize: function () {
                _.bindAll(this);
                this.collection.on('add', this.render);
            },

            render: function () {
                var places = this.collection.toJSON();

                _.each(places, function (place) {
                    var placeView = new PlaceView({
                        model: place
                    });

                    this.$el.append(placeView.render().el);
                }, this);
            }
        });

        return SidebarView;
    });