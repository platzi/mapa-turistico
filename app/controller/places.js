'use strict';

var Places          = require('../models/places').Places,
    photoController = require('../controller/photo'),
    async           = require('async'),
    helpers         = require('../lib/helpers'),
    handleResponse,
    savePhotoAndPlaces,
    validatePostCreate;

handleResponse = function (err, res) {
    if (err) {
        if (err.name === 'ValidationError' || err.errors) {
            return res.send(400);
        }
        return res.send(500);
    }
    return res.send(201);
};

savePhotoAndPlaces = function (file, place, next) {
    var file_ext = helpers.image.extensions[file.type];

    async.waterfall([
        function (callback) {
            photoController.savePhoto({
                name: file.name,
                ext : file_ext,
                path: file.path
            }, callback);
        },
        function (photo, callback) {
            place.image = photo._id + '.' + photo.image.ext;
            Places.create(place, function (err, doc) {
                if (err) { return callback(err); }

                photoController.updatePhoto(photo._id, {
                    place: doc._id
                }, callback);
            });
        }
    ], next);
};

validatePostCreate = function (req, res, next) {
    req.assert('lat', 'Invalid lat').isDecimal();
    req.assert('lng', 'Invalid lat').isDecimal();

    req.sanitize('city').xss();
    req.sanitize('country').xss();
    req.sanitize('description').xss();
    req.sanitize('name').xss();

    var errors = req.validationErrors();
    if (errors) {
        handleResponse({errors: errors}, res);
    }

    next();
};

exports.create = function (req, res) {
    if (!req.files || !req.files.file) {return res.send(400);}

    validatePostCreate(req, res, function () {
        var file     = req.files.file,
            place    = {
                city: req.param('city'),
                country: req.param('country'),
                description: req.param('description'),
                name : req.param('name'),
                image : req.param('image'),
                point: {
                    lat: req.param('lat'),
                    lng: req.param('lng')
                }
            };

        savePhotoAndPlaces(file, place, function (err) {
            handleResponse(err, res);
        });
    });
};

exports.findAll = function (req, res) {
    Places.find({}, function (err, places) {
        if (err) {return res.send(500); }
        res.send(places);
    });
};