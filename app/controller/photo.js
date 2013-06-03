'use strict';

var Photo = require('../models/photo'),
    async = require('async');

exports.savePhoto = function (file, next) {
    var photo = new Photo({
        name: file.name,
        image: {
            ext: file.ext
        },
        user: file.user
    });

    async.series([
        function (callback) {
            Photo.create(photo, function (err) {
                callback(err);
            });
        },
        function (callback) {
            photo.upload(file.path, function (err) {
                callback(err);
            });
        }
    ], function (err) {
        next(err, photo);
    });
};

exports.updatePhoto = function (id, photo, next) {
    Photo.findByIdAndUpdate(id, photo, next);
};