define([
        'jquery',
        'underscore',
        'backbone',
        'Handlebars',
        'text!../templates/addPlaceTemplate.html',
        '../countries',
        'jqueryform'
    ], function ($, _, Backbone, Handlebars, addPlaceTemplate, countries) {
        'use strict';

        var AddPlaceView = Backbone.View.extend({
            el: '#agregar-sitio',

            template: Handlebars.compile(addPlaceTemplate),

            events: {
                'submit #form-agregar-sitio': 'onSubmit',
                'click #geolocationOption'  : 'putCurrentLocation',
                'click #closeButton'        : 'close'
            },

            initialize:  function () {
                _.bindAll(this);
            },

            render: function () {
                this.$el.html(this.template({ countries: countries }));
                return this;
            },

            toggle: function () {
                this.$el.fadeToggle();
            },

            onSubmit: function (e) {
                var self = this;
                e.preventDefault();
                $('#form-agregar-sitio').ajaxSubmit({
                    success: function (data) {
                        self.close();
                        console.log(data);
                    }
                });
            },

            close: function () {
                this.$el.hide();
            },

            putCurrentLocation: function () {
                $('#latPlace').val(this.model.get('lat'));
                $('#lngPlace').val(this.model.get('lng'));
            }
        });

        return AddPlaceView;
    });