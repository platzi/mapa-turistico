'use strict';

var cfg = require('./config').cfg,
    RedisStore,
    sessionStore;

sessionStore = function () {
    return new RedisStore({
        host: cfg.sessionStore.host,
        port: cfg.sessionStore.port
    });
};

module.exports = function (app) {
    RedisStore = require('connect-redis')(app);
    return sessionStore();
};