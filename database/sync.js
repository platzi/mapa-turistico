var Sequelize = require("sequelize");
var sequelize = require('./connect');

var User = require('../application/models/user');
var Place = require('../application/models/place');

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