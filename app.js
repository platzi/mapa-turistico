<<<<<<< HEAD
// Cargamos módulos Node
var express = require('express');
var http = require('http');

// Creamos aplicación
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;

// Configuramos la aplicación
app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('password'));
  app.use(express.session({secret: 'password'}));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

//conexion con twitter
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',//cambiar por el host de la base de datos
  user     : 'jose',//usuario de la base de datos
  password : '123',//password del usuario
  database : 'mapa-turistico'//nombre de la base de datos
});
connection.connect();




//le pasamos el usuario y crea la sesión
passport.serializeUser(function(user, done) {
  done(null, user.id);
});


passport.deserializeUser(function(id, done) {
  connection.query('SELECT * FROM usuarios WHERE id="'+id+'"', function (err,usuario){
              done(err, usuario);
  });
});

passport.use(new TwitterStrategy({
    consumerKey: "sVWLivQC1afK6ULcUqWjg",//consumer key
    consumerSecret: "uGpUX34oJ8h7Hp5jiETk1hK1lgFykS6qXNM5vvf7QC0", //consumer secret
    callbackURL: "http://localhost:3000/auth/twitter/callback"
  },
  function(token, tokenSecret, profile, done) {
    // asynchronous verification, for effect...
    process.nextTick(function () {
      //si es válido la cuenta de twitter comprobamos que en nuestra base de datos este usuario no lo hayamos metido
      usuario=profile.username;
      id=profile._json.id;
      connection.query('SELECT id From usuarios WHERE usuario="'+usuario+'"', function(err, rows, fields) {
        if (err) throw err;
        if(rows.length==0)
        {
          imagen=profile.photos[0].value;
          connection.query('Insert into usuarios(id, usuario, imagen) values("'+id+'","'+usuario+'","'+imagen+'")', function (err,rows){
              nuevoUsuario={"id":id, "usuario":usuario, "imagen":imagen};
              done(null,nuevoUsuario);
            });
        }else{
          connection.query('SELECT * FROM usuarios WHERE id="'+id+'"', function (err,usuario){
              done(err, usuario[0]);
          });
        }
      });
    });
  }
));
//fin conexion con twitter

// Routing
app.get('/', function(req, res) {
	if(typeof(req.user)=="undefined")
	{
		res.render('layout', {
		title: 'Mapa en tiempo real',
		description: 'Mi primer mapa'
		});
	}else{
		res.redirect('/mapa');
	}
	
});

app.get('/mapa', function(req, res){
	if(typeof(req.user)=="undefined")
	{
		res.redirect('/');
	}else{
		res.render('mapa', {
		title: 'Mapa en tiempo real',
		description: 'Mi primer mapa',
		usuario: req.user
		});
	}
});

app.get('/lugar',function(req, res){
	res.render('place', {
		title: 'Toronto',
		description: 'Toronto es la ciudad canadiense más visitada por los turistas, recibiendo cada año algo más de 4 millones de personas y ocupando el puesto 14. La siguiente ciudad del país, Montreal, queda muy lejos con 679 000 turistas, según un estudio realizado con relación al año 2006',
		autor: 'Carlos Suarez'
	});
});

app.get('/salir', function (req,res){
	req.logout();
	res.redirect('/');
});

//rutas para login con twitter
//enlace para autenticar a través de twitter
app.get('/auth/twitter', passport.authenticate('twitter'));

//url dónde devuelve si realmente fue correcto o no
app.get('/auth/twitter/callback', 
  passport.authenticate('twitter', { successRedirect: '/mapa',
                                     failureRedirect: '/' }));



io.sockets.on('connection', function (socket) {
	socket.on('coords:me', function (data) {
		socket.broadcast.emit('coords:user', data);
	});
});

// Iniciamos server en el puerto 3000
server.listen(3000);

console.log('Servidor Node Js en http://localhost:3000');
=======
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

function compileStylus(str, path) {
	return stylus(str)
		.set('filename', path)
		.set('compress', true)
		.use(nib());
}

// Desarrollo
app.configure('development', function() {
	app.use(stylus.middleware({
		src: __dirname + '/application/assets', // poner los archivos .styl en `application/assets/stylesheets`
		dest: __dirname + '/public', // ruta donde se compilará stylus `public/stylesheets/*.css`
		compile: compileStylus
	}));
	app.set('port', config.development.port);
	app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

// Producción
app.configure('production', function() {
	app.set('port', config.production.port);
	app.use(express.errorHandler());
});

// Ambos (producción y desarrollo)
app.configure(function() {
	app.set('views', __dirname + '/application/views');
	app.set('view engine', 'jade');
	app.use(express.favicon());
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	
	app.use(express.static(__dirname + '/public'));
});

// Routing
require('./config/routes')(app);

// Return
module.exports = app;
>>>>>>> mapa-turistico/master
