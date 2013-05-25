'use strict';
var Places = require('../models/places').Places,
    handleResponse;

handleResponse = function (err, res) {
    if (err) {
        if (err.name === 'ValidationError') {
            return res.send(400);
        }
        return res.send(500);
    }

    return res.send(200);
};

exports.create = function (req, res) {
    var selfRes = res,
        place   = {
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
        handleResponse(err, selfRes);
    });
};

exports.findAll = function (req, res) {
    Places.find({}, function (err, places) {
        if (err) {return res.send(500); }
        res.send(places);
    });

};