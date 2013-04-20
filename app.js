// Librerías
var express = require('express');

// Applicación
var app = express();

// Rutas
app.get('/', function(req, res){
	res.send('hello world');
});

// Servidor
app.listen(3000);