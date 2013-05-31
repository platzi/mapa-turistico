require('./utils');

var request = require('supertest'),
    app     = require('../app');

describe('#Profile', function () {
    'use strict';

    describe('#Get /profile', function () {
        it('should return object json user registered', function (done) {
            request(app)
                .get('/profile')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
    });
});