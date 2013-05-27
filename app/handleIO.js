'use strict';
var cookie      = require('cookie'),
    parseCookie = require('connect').utils.parseSignedCookie,
    RedisStore  = require('socket.io/lib/stores/redis'),
    redis       = require('socket.io/node_modules/redis'),
    cfg         = require('./config').cfg,
    pub         = redis.createClient(cfg.sessionStore.port, cfg.sessionStore.host),
    sub         = redis.createClient(cfg.sessionStore.port, cfg.sessionStore.host),
    client      = redis.createClient(cfg.sessionStore.port, cfg.sessionStore.host),
    authRedis;

authRedis = function () {
    var pass = cfg.sessionStore.auth;
    pub.auth(pass, function () {
        console.log('Ok.');
    });
    sub.auth(pass, function () {
        console.log('Ok.');
    });
    client.auth(pass, function () {
        console.log('Ok.');
    });
};

exports.init = function (io) {

    if (cfg.sessionStore.auth) { authRedis(); }

    var sessionStore = require('./sessionStore').get();

    io.configure(function () {
        io.set('store', new RedisStore({
            redisPub: pub,
            redisSub: sub,
            redisClient: client
        }));
    });

    io.set('authorization', function (data, accept) {
        if (data.headers.cookie) {
            data.cookie = cookie.parse(data.headers.cookie);

            if (data.cookie[cfg.session.key]) {
                data.sessionID = parseCookie(data.cookie[cfg.session.key], cfg.session.secret);

                sessionStore.get(data.sessionID, function (err, session) {
                    if (err) { return accept(err, false); }
                    data.session = session;
                    accept(null, true);
                });
            } else {
                return accept(null, true);
            }
        } else {
            return accept(null, true);
        }
    });

    io.configure('production', function () {
        io.set('log level', 0);
        io.enable('browser client minification');
        io.enable('browser client etag');
        io.enable('browser client gzip');
        io.set('transports', ['websocket', 'flashsocket', 'htmlfile',
                              'xhr-polling', 'jsonp-polling']);
    });

    io.configure('development', function () {
        io.set('transports', ['websocket']);
    });

    require('./controller/io').handle(io);
};