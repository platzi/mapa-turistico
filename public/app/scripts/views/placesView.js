define([
        'backbone',
        'Handlebars',
        'text!templates/sidebarTemplate.html'
    ], function (Backbone, Handlebars, sidebarTemplate) {
        'use strict';

        var PlacesView = Backbone.View.extend({
            template: Handlebars.compile(sidebarTemplate),

            render: function () {
                this.$el.html(this.template(this.model));
                return this;
            }
        });

        return PlacesView;
    });