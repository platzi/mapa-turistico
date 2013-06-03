'use strict';
var app       = require('../app'),
    request   = require('supertest'),
    Places    = require('../app/models/places'),
    ObjectId  = require('mongoose').Types.ObjectId,
    util_test = require('./utils');

describe('#Places', function (){
    beforeEach(function (done) {
        util_test.createDir();
        done();
    });

    describe('#SAVE places and photo', function () {
        it('should return save Places and Photo', function (done) {
            var objectId = new ObjectId(),

            file = {
                name: 'test',
                ext: 'jpg',
                path: util_test.getPath()
            },

            place = {
                description: 'Este es un lugar bonito',
                city: '<script>alert(Santo Domingo)</script>',
                country: 'Republica Dominica',
                name: 'Faro colon',
                point: {
                    lat: '40',
                    lng: '40'
                },
                user: objectId
            };

            Places.savePhotoAndPlaces(file, place, done);
        });
    });

    describe('#POST /places', function () {
        it('should return 403 because the user is not authenticated', function (done) {
            request(app)
                .post('/places')
                .send({})
                .set('Accept', 'application/json')
                .expect(403, done);
        });
    });

    describe('#GET /places', function () {
        it('should return 200 and objects json', function (done) {
            request(app)
                .get('/places')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200,done);
        });
    });
});