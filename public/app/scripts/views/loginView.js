define([
        'backbone',
        'Handlebars',
        'text!../templates/loginTemplate.html'
    ], function (Backbone, Handlebars, logintTemplate) {
        'use strict';

        var LoginView = Backbone.View.extend({
            el: '#logintt',

            template: Handlebars.compile(logintTemplate),

            render: function () {
                this.$el.html(this.template());
                return this;
            },

            toggle: function () {
                this.$el.fadeToggle();
            }
        });

        return LoginView;
    });