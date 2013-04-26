// Cargamos módulos Node
var express = require('express');
var http = require('http');

// Creamos aplicación
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

// Configuramos la aplicación
app.configure(function() {
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.use(express.static(__dirname + '/public'));
});

// Routing
app.get('/', function(req, res) {
	res.render('layout', {
		title: 'Mapa en tiempo real',
		description: 'Mi primer mapa'
	});
});

app.get('/lugar',function(req, res){
	res.render('place', {
		title: 'Toronto',
		description: 'Toronto es la ciudad canadiense más visitada por los turistas, recibiendo cada año algo más de 4 millones de personas y ocupando el puesto 14. La siguiente ciudad del país, Montreal, queda muy lejos con 679 000 turistas, según un estudio realizado con relación al año 2006',
		autor: 'Carlos Suarez'
	});
});

io.sockets.on('connection', function (socket) {
	socket.on('coords:me', function (data) {
		socket.broadcast.emit('coords:user', data);
	});
});

// Iniciamos server en el puerto 3000
server.listen(3000);

console.log('Servidor Node Js en http://localhost:3000');