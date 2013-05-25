'use strict';
var Places = require('../models/places').Places;

exports.create = function (req, res) {
    var place = {
        city: req.param('city'),
        country: req.param('country'),
        description: req.param('description'),
        name : req.param('name'),
        point: {
            lat: req.param('lat'),
            lng: req.param('lng')
        }
    };

    Places.create(place, function (err) {
        if (err) {
            if (err.name === 'ValidationError') {
                return res.send(400);
            }
            return res.send(500);
        }

        return res.send(200);
    });
};