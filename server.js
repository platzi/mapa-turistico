// Dependecias de Node Js
var http = require('http');
var socketIO = require('socket.io');

// Importamos la aplicación
var app = require('./app');

// Servidor HTTP
var server = http.createServer(app);

server.listen(app.get('port'), function() {
    console.log("Servidor Node Js en http://localhost:" + app.get('port'));
});

// Socket IO
var io = socketIO.listen(server); // Socket IO

io.sockets.on('connection', function(socket) {
    socket.on('coords:me', function(data) {
        socket.broadcast.emit('coords:user', data);
    });
});