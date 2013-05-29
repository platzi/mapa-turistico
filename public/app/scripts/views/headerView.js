define([
        'backbone',
        'underscore',
        '../views/loginView',
        '../views/addPlaceView'
    ], function (Backbone, _, LoginView, AddPlaceView) {
        'use strict';

        var HeaderView = Backbone.View.extend({
            el: '#header',

            events: {
                'click #loginButton': 'renderLogin',
                'click #addButton'  : 'renderAddPlace'
            },

            initialize: function () {
                _.bindAll(this);

                this.loginView    = new LoginView();
                this.addPlaceView = new AddPlaceView({ model: this.model });
            },

            renderLogin: function (e) {
                e.preventDefault();
                this.$el.append(this.loginView.render().el);
                this.loginView.toggle();
            },

            renderAddPlace: function (e) {
                e.preventDefault();
                this.$el.append(this.addPlaceView.render().el);
                this.addPlaceView.toggle();
            }
        });

        return HeaderView;
    });