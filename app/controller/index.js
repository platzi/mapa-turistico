'use strict';

module.exports = function (req, res) {
    res.render('index', {
        title: 'Mapa en tiempo real',
        description: 'Mi primer mapa'
    });
};