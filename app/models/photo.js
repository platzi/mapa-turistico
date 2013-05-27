'use strict';

var mongoose = require('mongoose'),
    Schema   = mongoose.Schema,
    ObjectId = Schema.ObjectId,
    path     = require('path'),
    fs       = require('fs'),
    photoSchema,
    alternate_upload;

alternate_upload = function (origin, destination, next) {
    var read  = fs.createReadStream(origin),
        write = fs.createWriteStream(destination);

    read.pipe(write);
    write.on('close', function () {
        fs.unlink(origin, function (err) {
            next(err);
        });
    });
};

var methods = {
    upload: function (path_file, next) {
        var self        = this,
            path_upload = path.join(__dirname, '../../uploads/',
                (String(self._id) + '.' + self.image.ext));

        fs.rename(path_file, path_upload, function (err) {
            if (err) { return alternate_upload(path_file, path_upload, next); }
            next(null);
        });
    }
};

photoSchema = new Schema({
    user: {type: ObjectId},
    name: {type: String},
    url : {type: String},
    image: {
        ext: String
    },
    place: {
        type    : ObjectId,
        ref     : 'place',
        required: false
    }
});

photoSchema.methods.upload = methods.upload;

module.exports = mongoose.model('photo', photoSchema);