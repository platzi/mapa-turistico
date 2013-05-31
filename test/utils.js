/*jshint loopfunc: true */
var mongoose = require('mongoose');
process.env.NODE_ENV = 'test';

beforeEach(function (done) {
    'use strict';

    function clearDB() {
        for (var i in mongoose.connection.collections) {
            mongoose.connection.collections[i].remove(function () {});
        }
        return done();
    }

    function reconnect() {
        mongoose.connect('mongodb://localhost:27017/mapatest', function (err) {
            if (err) { throw err; }
            return clearDB();
        });
    }

    function checkState() {
        switch(mongoose.connection.readyState) {
        case 0:
            reconnect();
            break;
        case 1:
            clearDB();
            break;
        default:
            process.nextTick(checkState);
        }
    }

    checkState();
});

afterEach(function (done) {
    'use strict';

    mongoose.disconnect();
    return done();
});