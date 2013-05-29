define([
        'backbone',
        'underscore',
        '../model/placesModel'
    ], function (Backbone, _, PlacesModel) {
        'use strict';

        var PlacesCollection = Backbone.Collection.extend({
            model: PlacesModel,
            url  : '/places'
        });

        return PlacesCollection;
    });