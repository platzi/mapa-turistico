'use strict';

var indexController   = require('./controller/index'),
    placesController  = require('./controller/places'),
    profileController = require('./controller/profile'),
    auth              = require('./auth'),
    passport          = require('passport');

var logoutController = function (req, res) {
    req.logout();
    res.redirect('/');
};

module.exports = function (app) {
    app.get('/', indexController);
    app.get('/logout', logoutController);

    //places url
    app.post('/places', auth.ensureAuthenticated, placesController.create);
    app.get('/places', placesController.findAll);

    //get profile
    app.get('/profile', profileController.getProfile);

    //authentification twitter
    app.get('/auth/twitter', passport.authenticate('twitter'));
    app.get('/auth/twitter/callback', passport.authenticate('twitter',
        {successRedirect: '/', failureRedirect: '/login'}));
};