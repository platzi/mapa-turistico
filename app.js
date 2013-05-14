// Cargamos módulos Node Js
var express = require('express');
var stylus = require('stylus');
var nib = require('nib');
// var passport = require('passport');
// var passportTwitter = require('passport-twitter');
// var passportFacebook = require('passport-facebook');

// Creamos la aplicación
var app = express();

// Configuración
var config = require('./config/environments');

function compileStylus(str. path) {
	return stylus(str)
		.set('filename', path)
		.set('compress', true)
		.use(nib());
}

app.configure(function() {
	app.set('views', __dirname + '/application/views');
	app.set('view engine', 'jade');
	app.use(express.favicon());
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(stylus.middleware({
		src: __dirname + '/application/assets', // poner los archivos .styl en `application/assets/stylesheets`
		dest: __dirname + '/public', // ruta donde se compilará stylus `public/stylesheets/*.css`
		compile: compileStylus
	}));
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