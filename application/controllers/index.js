module.exports = function(req, res) {
    var User = require('../models/user');

    User.getAll();

    res.render('index', {
        title: 'Mapa en tiempo real',
        description: 'Mi primer mapa'
    });
};