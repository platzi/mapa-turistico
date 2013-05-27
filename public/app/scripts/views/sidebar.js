define([
        'backbone',
        'underscore',
        'text!../templates/sidebarTemplate.html'
    ], function (Backbone, _, sidebarTemplate) {
        'use strict';

        var Sidebar = Backbone.View.extend({
            el: '#placeList',
            template: _.template(sidebarTemplate),

            render: function (place) {
                this.$el.append(this.template(place));
            },

            addPlaces: function (places) {
                var self = this;

                _.each(places.toJSON(), function (place) {
                    self.render(place);
                });
            }
        });

        return new Sidebar();
    });