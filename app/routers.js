'use strict';

var indexController   = require('./controller/index'),
    placesController  = require('./controller/places'),
    profileController = require('./controller/profile'),
    passport          = require('passport');

var logoutController = function (req, res) {
    req.logout();
    res.redirect('/');
};

module.exports = function (app) {
    app.get('/', indexController);
    app.get('/logout', logoutController);

    //places url
    app.post('/places', placesController.create);
    app.get('/places', placesController.findAll);

    //get profile
    app.get('/profile', profileController.getProfile);

    //authentification twitter
    app.get('/auth/twitter', passport.authenticate('twitter'));
    app.get('/auth/twitter/callback', passport.authenticate('twitter',
        {successReturnToOrRedirect: '/', failureRedirect: '/login'}));

    //autentification facebook
    app.get('/auth/facebook', passport.authenticate('facebook'));
    app.get('/auth/facebook/callback', passport.authenticate('facebook',
        {successReturnToOrRedirect: '/', failureRedirect: '/login'}));
};