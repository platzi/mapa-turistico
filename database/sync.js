/*
	NOTA: Ejecutando este archivo creará las tablas necesarias, de esta forma no necesitaremos tener un archivo SQL,
	además si hacemos un cambio en nuestras tablas o celdas no haría falta borrar y volver a crear la base de datos.
*/

var Sequelize = require("sequelize");
var sequelize = require('./connect');

var User = require('../application/models/user');
var Place = require('../application/models/place');

// Crea tabla de usuarios, 
User
	.sync()
	.success(function() {
		console.log('\n Tabla de usuarios creada correctamente');
	});

Place
	.sync()
	.success(function() {
		console.log('\n Tabla de lugares creada correctamente');
	});