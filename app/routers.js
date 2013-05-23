'use strict';

var indexController = require('./controller/index'),
    passport        = require('passport');

module.exports = function (app) {
    app.get('/', indexController);

    //authentification twitter
    app.get('/auth/twitter', passport.authenticate('twitter'));
    app.get('/auth/twitter/callback', passport.authenticate('twitter',
        {successReturnToOrRedirect: '/', failureRedirect: '/login'}));
};