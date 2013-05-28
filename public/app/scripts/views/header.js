define(['backbone', 'jquery'], function (Backbone, $) {
    'use strict';

    var HeaderView = Backbone.View.extend({
        el: '#header',

        events: {
            'click #addButton'  : 'showFormAddPlace',
            'click #loginButton': 'showFormLogin'
        },

        showFormAddPlace: function(e) {
            e.preventDefault();
            $('#agregar-sitio').fadeToggle();
        },

        showFormLogin: function(e) {
            e.preventDefault();
            $('#logintt').fadeToggle();
        }
    });

    return new HeaderView();
});