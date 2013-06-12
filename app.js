'use strict';

var express          = require('express'),
    path             = require('path'),
    cfg              = require('./app/config').cfg,
    passport         = require('passport'),
    expressValidator = require('express-validator'),
    sessionStore     = require('./app/sessionStore').create(express);

var app = module.exports = express();

app.configure(function() {
    app.set('port', cfg.PORT);
    app.set('views', path.join(__dirname, 'app/views'));
    app.set('view engine', 'jade');
    app.use(express.logger('dev'));
    app.use(express.favicon());
    app.use(express.cookieParser());
    app.use(express.bodyParser({
        uploadDir: '/tmp'
    }));
    app.use(expressValidator);
    app.use(express.methodOverride());
    app.use(express.session({
        key   : cfg.session.key,
        secret: cfg.session.secret,
        store : sessionStore
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(app.router);

    app.use(express.static(path.join(__dirname, 'public')));
    app.use(express.static(cfg.STATIC_DIR));
});

require('./app/auth/twitter')();
require('./app/routers')(app);