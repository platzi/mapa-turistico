define([
        'backbone',
        'Handlebars',
        'text!templates/sidebarTemplate.html'
    ], function (Backbone, Handlebars, sidebarTemplate) {
        'use strict';

        var PlacesView = Backbone.View.extend({

            template: Handlebars.compile(sidebarTemplate),

            events: {
                'click .elemList': 'addMarker'
            },

            render: function () {
                this.setElement(this.template(this.model));
                return this;
            },

            addMarker: function () {

            }
        });

        return PlacesView;
    });