/*
	NOTA: Ejecutando este archivo se crearan registros en la base de datos, muy útil para desarrollo
*/

var Sequelize = require("sequelize");
var sequelize = require('./connect');

var User = require('../application/models/user');
var Place = require('../application/models/place');

User
	.create({
		usuario: 'desarrollador'
	})
	.success(function() {
		console.log('\n Usuario creado correctamente');
	})
	.error(function(errors) {
		console.log(errors);
	});