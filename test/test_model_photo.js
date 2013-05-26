var Photo    = require('../app/models/photo').Photo,
    ObjectId = require('mongoose').Types.ObjectId;

describe('#Photo', function () {
    'use strict';

    describe('#Save', function () {
        it('should return true when the data is correct', function (done) {
            var photo = new Photo({
                user: new ObjectId(),
                name: 'Parque enriquillo',
                url : 'https://127.0.0.1:3000/photo/893298457jkshdf9243.jpg'
            });

            photo.save(done);
        });
    });
});