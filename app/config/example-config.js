'use strict';

module.exports = {
    PORT                    : (process.env.PORT || 3000),
    TWITTER_CONSUMER_KEY    : '',
    TWITTER_CONSUMER_SECRET : '',
    db: {
        name   : process.env.MONGO_DB   || 'mapaturistico',
        port   : process.env.MONGO_PORT || 27017,
        host   : process.env.MONGO_HOST || 'localhost',
        getUrl : function () {
            var self = this;
            return ['mongodb', ':', '//', self.host, ':', self.port, '/', self.name].join('');
        }
    },
    session: {
        key   : 'proudplace.sid',
        secret: 'HelloWorld!!!'
    },
    sessionStore: {
        host: process.env.SESSION_HOST || 'localhost',
        port: process.env.SESSION_PORT || 6379
    }
};