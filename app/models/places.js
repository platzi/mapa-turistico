var mongoose        = require('mongoose'),
    helpers         = require('../lib/helpers'),
    Schema          = mongoose.Schema,
    async           = require('async'),
    photoController = require('../controller/photo'),
    placesSchema,
    Places;

placesSchema = new Schema({
    description : {
        type: String
    },
    city : {
        type    : String,
        required: true
    },
    country     : {
        type    : String,
        required: true
    },
    name : {
        type    : String,
        required: true
    },
    point : {
        lat : {
            type: Number,
            required: true
        },
        lng : {
            type: Number,
            required: true
        }
    },
    image: {
        type: String
    }
});

placesSchema.statics.savePhotoAndPlaces = function (file, place, next) {
    'use strict';
    var file_ext = helpers.image.extensions[file.type];

    async.waterfall([
        function (callback) {
            photoController.savePhoto({
                name: file.name,
                ext : file_ext,
                path: file.path,
                user: place.user
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

module.exports = Places = mongoose.model('places', placesSchema);