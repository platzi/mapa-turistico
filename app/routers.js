'use strict';

var indexController  = require('./controller/index'),
    placesController = require('./controller/places'),
    passport         = require('passport');

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

    //authentification twitter
    app.get('/auth/twitter', passport.authenticate('twitter'));
    app.get('/auth/twitter/callback', passport.authenticate('twitter',
        {successReturnToOrRedirect: '/', failureRedirect: '/login'}));
};