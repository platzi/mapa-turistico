// Dependecias de Node Js
var http = require('http');
var socketIO = require('socket.io');

// Importamos la aplicación
var app = require('./app');

// Creamos servidor
var server = http.createServer(app);
var io = socketIO.listen(server); // Socket IO

// Iniciamos server
var port = app.get('port') || 3000; // Si no especificamos el puerto en la configuración toma por defecto el puerto 3000

server.listen(port, function() {
    console.log("Servidor Node Js en http://localhost:" + port);
});