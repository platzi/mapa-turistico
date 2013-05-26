var app      = require('../app'),
    request  = require('supertest');


describe('#Places', function (){
    'use strict';

    describe('#POST /places', function () {
        // it('should return 200', function (done) {
        //     request(app)
        //         .post('/places')
        //         .send({
        //             description : 'Este es un lugar bonito',
        //             city        : 'Santo Domingo',
        //             country     : 'Republica Domicana',
        //             name        : 'Bahia de las aguilas',
        //             lat         : 40,
        //             'lng'       : 40
        //         })
        //         .set('Accept', 'application/json')
        //         .expect(201, done);
        // });

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