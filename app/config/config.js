'use strict';
var url       = require('url'),
    MONGO_URL = (process.env.MONGOHQ_URL || 'mongodb://localhost:27017/mapaturistico'),
    REDISTOGO = url.parse(process.env.REDISTOGO_URL || 'http://localhost:6379'), //
    REDISHOST = REDISTOGO.hostname,
    REDISPORT = REDISTOGO.port,
    REDISAUTH = (process.env.REDISTOGO_URL ? REDISTOGO.auth.split(':')[1] : undefined);

module.exports = {
    PORT                    : (process.env.PORT || 3000),
    TWITTER_CONSUMER_KEY    : 'gmQp5jjmegPfwc8dQO2nQ', //requeridas
    TWITTER_CONSUMER_SECRET : '4tEXeDflYh1TZPZk1ZQ7gu7Dc0PdslHWeRbhVvVFE', //requeridas
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