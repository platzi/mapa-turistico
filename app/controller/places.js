'use strict';

var Places          = require('../models/places').Places,
    photoController = require('../controller/photo'),
    async           = require('async'),
    helpers         = require('../lib/helpers'),
    handleResponse;

handleResponse = function (err, res) {
    if (err) {
        if (err.name === 'ValidationError') {
            return res.send(400);
        }
        return res.send(500);
    }
    return res.send(201);
};

exports.create = function (req, res) {
    if (!req.files) {return res.send(400);}

    var file     = req.files.file,
        file_ext = helpers.image.extensions[file.type],
        place    = {
            city: req.param('city'),
            country: req.param('country'),
            description: req.param('description'),
            name : req.param('name'),
            image : req.param('image'),
            point: {
                lat: Number(req.param('lat')),
                lng: Number(req.param('lng'))
            }
        };

    async.waterfall([
        function (callback) {
            photoController.savePhoto({
                name: file.name,
                ext : file_ext,
                path: file.path
            }, callback);
        },
        function (photo, callback) {
            place.image = photo._id;
            Places.create(place, callback);
        }
    ], function (err) {
        handleResponse(err, res);
    });
};

exports.findAll = function (req, res) {
    Places.find({}, function (err, places) {
        if (err) {return res.send(500); }
        res.send(places);
    });

};