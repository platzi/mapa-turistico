var app      = require('../app'),
    mongoose = require('mongoose'),
    request  = require('supertest');


describe('#Places', function (){
    'use strict';
    before(function () {
        var conn = mongoose.connect('mongodb://127.0.0.1:27017/map-test');
        conn.connection.db.dropDatabase();
    });

    describe('#POST /places', function () {
        it('should return 200', function (done) {
            request(app)
                .post('/places')
                .send({
                    description : 'Este es un lugar bonito',
                    city        : 'Santo Domingo',
                    country     : 'Republica Domicana',
                    name        : 'Bahia de las aguilas',
                    lat         : 40,
                    'lng'       : 40
                })
                .set('Accept', 'application/json')
                .expect(200, done);
        });

        it('should returnar 400 because the post is wrong', function (done) {
            request(app)
                .post('/places')
                .send({})
                .set('Accept', 'application/json')
                .expect(400, done);
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