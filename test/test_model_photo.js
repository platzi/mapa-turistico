var Photo    = require('../app/models/photo'),
    ObjectId = require('mongoose').Types.ObjectId,
    photoController = require('../app/controller/photo'),
    path     = require('path'),
    fs       = require('fs');

describe('#Photo', function () {
    'use strict';

    var path_file = path.join(__dirname, '/bosque.jpg'),
        readTemp,
        writeTemp;

    beforeEach(function () {
        readTemp  = fs.createReadStream(path.join(__dirname, '/fixtures/bosque.jpg')),
        writeTemp = fs.createWriteStream(path.join(__dirname, 'bosque.jpg')),
        readTemp.pipe(writeTemp);
    });

    describe('#Save', function () {
        it('should return true when the data is correct', function (done) {
            var photo = new Photo({
                user: new ObjectId(),
                name: 'Parque enriquillo'
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

            photo.upload(path_file, done);
        });
    });

    describe('#Save and Upload', function () {
        it('should save and upload photo', function (done) {
            var photo = {
                name: 'bosque',
                ext : 'jpg',
                path: path_file
            };

            photoController.savePhoto(photo, done);
        });
    });
});