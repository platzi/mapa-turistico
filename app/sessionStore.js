'use strict';

var cfg = require('./config').cfg,
    RedisStore,
    newSessionStore,
    getSessionStore,
    sessionStore;

newSessionStore = function () {
    return new RedisStore({
        host: cfg.sessionStore.host,
        port: cfg.sessionStore.port,
        pass: cfg.sessionStore.auth
    });
};

getSessionStore = function () {
    return sessionStore;
};

exports.create = function (app) {
    RedisStore   = require('connect-redis')(app);
    sessionStore = newSessionStore();
    return sessionStore;
};

exports.get = getSessionStore;