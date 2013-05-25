'use strict';

var app      = require('./app'),
    server   = require('http').createServer(app),
    io       = require('socket.io').listen(server),
    config   = require('./app/config').cfg,
    mongoose = require('mongoose');

mongoose.connect(config.db.getUrl());

require('./app/handleIO').init(io);

server.listen(Number(app.get('port')), function () {
    console.log('Server startup on port ->', app.get('port'));
});