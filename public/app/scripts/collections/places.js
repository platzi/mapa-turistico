define([
        'backbone',
        '../model/place'
    ], function (Backbone, PlaceModel) {
        'use strict';

        var PlaceCollection = Backbone.Collection.extend({
            model: PlaceModel,
            url  : '/places'
        });

        return new PlaceCollection();
    });