'use strict';
var Photo           = require('../app/models/photo'),
    ObjectId        = require('mongoose').Types.ObjectId,
    photoController = require('../app/controller/photo'),
    ObjectId        = require('mongoose').Types.ObjectId,
    util_test       = require('./utils');


describe('#Photo', function () {
    beforeEach(function (done) {
        util_test.createDir();
        done();
    });

    describe('#Save', function () {
        it('should return true when the data is correct', function (done) {
            var photo = new Photo({
                user: new ObjectId(),
                name: 'Parque enriquillo',
                place: new ObjectId()
            });

            photo.save(done);
        });
    });

    describe('#Upload', function () {
        it('must change the location of the photo', function (done) {
            var photo = new Photo({
                    user  : new ObjectId(),
                    name  : 'bosque',
                    image : {
                        ext: 'jpg'
                    }
                });

            photo.upload(util_test.getPath(), done);
        });
    });

    describe('#Save and Upload', function () {
        it('should save and upload photo', function (done) {
            var photo = {
                name: 'bosque',
                ext : 'jpg',
                path: util_test.getPath(),
                user: new ObjectId()
            };

            photoController.savePhoto(photo, done);
        });
    });
});