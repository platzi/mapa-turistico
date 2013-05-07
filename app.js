// Cargamos módulos Node Js
var express = require('express');
var passport = require('passport');
var passportTwitter = require('passport-twitter');
var passportFacebook = require('passport-facebook');

// Variables globales
var TwitterStrategy = passportTwitter.Strategy;
var FacebookStrategy = passportFacebook.Strategy;

// Creamos la aplicación
var app = express();

// Configuración
var config = require('./config/environments');

app.configure(function() {
    app.set('views', __dirname + '/application/views');
    app.set('view engine', 'jade');
    app.use(express.favicon());
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
});

// Desarrollo
app.configure('development', function() {
    app.set('port', config.development.port);
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

// Producción
app.configure('production', function() {
    app.set('port', config.production.port);
    app.use(express.errorHandler());
});

// Routing
require('./config/routes')(app);

// Return
module.exports = app;