'use strict';

var mongoose = require('mongoose'),
    Schema   = mongoose.Schema,
    ObjectId = Schema.ObjectId,
    path     = require('path'),
    fs       = require('fs.extra'),
    photoSchema,
    alternate_upload;

alternate_upload = function (origin, destination) {
    console.log(origin);
    console.log(destination);
    var read  = fs.createReadStream(origin),
        write = fs.createWriteStream(destination);
    read.pipe(write);
};

var methods = {
    upload: function (path_file, next) {
        console.log(path_file);
        var self        = this,
            path_upload = path.join(__dirname, '../../uploads/',
                (String(self._id) + '.' + self.image.ext));

        fs.move(path_file, path_upload, function (err) {
            console.log(err);
            if (err) { return alternate_upload(path_file, path_upload); }
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
        ref     : 'user',
        required: false
    }
});

photoSchema.methods.upload = methods.upload;

module.exports = mongoose.model('photo', photoSchema);