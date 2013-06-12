'use strict';

var mongoose = require('mongoose'),
    Schema   = mongoose.Schema,
    ObjectId = Schema.ObjectId,
    path     = require('path'),
    move     = require('file-move'),
    cfg      = require('../config').cfg,
    photoSchema;

var methods = {
    upload: function (path_file, next) {
        var self        = this,
            path_upload = path.join(cfg.STATIC_DIR,
                (String(self._id) + '.' + self.image.ext));

        console.log(path_upload);

        move(path_file, path_upload, next);
    }
};

photoSchema = new Schema({
    user: {type: ObjectId, required: true},
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