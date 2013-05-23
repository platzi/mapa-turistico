'use strict';

var express      = require('express'),
    path         = require('path'),
    config       = require('./app/config').cfg,
    passport     = require('passport'),
    sessionStore = require('./app/sessionStore').create(express);

var app = module.exports = express();

app.configure(function() {
    app.set('port', config.PORT);
    app.set('views', path.join(__dirname, 'app/views'));
    app.set('view engine', 'jade');
    app.use(express.logger('dev'));
    app.use(express.favicon());
    app.use(express.cookieParser());
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.session({
        secret: 'Hello!!',
        store : sessionStore
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(app.router);

    app.use(express.static(path.join(__dirname, 'public')));
});

require('./app/auth/twitter')();
require('./app/routers')(app);