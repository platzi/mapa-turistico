'use strict';
var url       = require('url'),
    MONGO_URL = (process.env.MONGOHQ_URL || 'mongodb://localhost:27017/mapaturistico'),
    REDISTOGO = url.parse(process.env.REDISTOGO_URL || 'http://localhost:6379'),
    REDISHOST = REDISTOGO.hostname,
    REDISPORT = REDISTOGO.port,
    REDISAUTH = REDISTOGO.auth;

module.exports = {
    PORT                    : (process.env.PORT || 3000),
    TWITTER_CONSUMER_KEY    : 'mZ3vccBOe1CEjyM715nQ', //requeridas
    TWITTER_CONSUMER_SECRET : 'WgOvuGkHh0FkA7Ebkrox5Qcb7tJ5GjS8Ug9N7rrq4', //requeridas
    MONGO_URL: MONGO_URL,
    session: {
        key   : 'proudplace.sid',
        secret: 'HelloWorld!!!'
    },
    sessionStore: {
        host: REDISHOST,
        port: REDISPORT,
        auth: REDISAUTH
    }
};