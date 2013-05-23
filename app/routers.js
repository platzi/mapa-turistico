'use strict';

var indexController = require('./controller/index'),
    passport        = require('passport');

var logoutController = function (req, res) {
    req.logout();
    res.redirect('/');
};

module.exports = function (app) {
    app.get('/', indexController);
    app.get('/logout', logoutController);

    //authentification twitter
    app.get('/auth/twitter', passport.authenticate('twitter'));
    app.get('/auth/twitter/callback', passport.authenticate('twitter',
        {successReturnToOrRedirect: '/', failureRedirect: '/login'}));
};