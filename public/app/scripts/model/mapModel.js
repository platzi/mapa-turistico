define(['backbone'], function (Backbone) {
        'use strict';

        var MapModel = Backbone.Model.extend({
            defaults: {
                lat   : 0,
                lng   : 0,
                zoom  : 4,
                center: [0, 24]
            }
        });

        return MapModel;
    });