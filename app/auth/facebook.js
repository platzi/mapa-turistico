'use strict';

var cfg          = require('../config').cfg,
    passport        = require('passport'),
    FacebookStrategy = require('passport-facebook').Strategy,
    User            = require('../models/user'),
    findOrCreateFacebook,
    findUserById;

findOrCreateFacebook = function (token, tokenSecret, profile, done) {
    User.findOrCreate({
        username    : profile.username,
        photo       : profile._json.profile_image_url_https,
        provider    : 'facebook',
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
            provider: user.provider,
            avatar  : user.photo
        });
    });
};

module.exports = function () {
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(findUserById);

    passport.use(new FacebookStrategy({
        clientID: cfg.App_ID,
        clientSecret: cfg.App_Secret,
        callbackURL: '/auth/facebook/callback'
    }, findOrCreateFacebook));
};