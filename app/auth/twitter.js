'use strict';

var cfg          = require('../config').cfg,
    passport        = require('passport'),
    TwitterStrategy = require('passport-twitter').Strategy,
    User            = require('../models/user'),
    findOrCreateTwitter,
    findUserById;

findOrCreateTwitter = function (token, tokenSecret, profile, done) {
    User.findOrCreate({
        username    : profile.username,
        photo       : profile._json.profile_image_url_https,
        provider    : 'twitter',
        provider_id : profile._json.id_str,
        token       : token,
        tokenSecret : tokenSecret
    }, done);
};

findUserById = function (id, done) {
    User.findById(id, function (err, user) {
        if (err) {return done(err);}

        done(null, {
            id      : user._id,
            username: user.username,
            provider: user.provider
        });
    });
};

module.exports = function () {
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(findUserById);

    passport.use(new TwitterStrategy({
        consumerKey: cfg.TWITTER_CONSUMER_KEY,
        consumerSecret: cfg.TWITTER_CONSUMER_SECRET,
        callbackURL: '/auth/twitter/callback'
    }, findOrCreateTwitter));
};