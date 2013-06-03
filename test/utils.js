/*jshint loopfunc: true */
'use strict';

var mongoose = require('mongoose'),
    testutil = require('testutil'),
    path     = require('path'),
    DB       = 'mongodb://localhost:27017/mapatest',
    SIZE     = 16 * 64 * 1024 + 7,
    DIR_TEST,
    SRC;

process.env.NODE_ENV = 'test';

beforeEach(function (done) {
    function clearDB() {
        for (var i in mongoose.connection.collections) {
            mongoose.connection.collections[i].remove(function () {});
        }
        return done();
    }

    function reconnect() {
        mongoose.connect(DB, function (err) {
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
    mongoose.disconnect();
    return done();
});

exports.createDir = function () {
    DIR_TEST = testutil.createTestDir('file-move');
    SRC      = testutil.createFileWithData(path.join(DIR_TEST, 'test.jpg'), SIZE);
};

exports.getPath = function () {
    return SRC;
};