var Sequelize = require("sequelize");
var sequelize = require('./connect');

var User = require('../application/models/user');
var Place = require('../application/models/place');

User
	.create({
		usuario: 'desarrollador'
	})
	.success(function() {
		console.log('\n ===== \n Usuario creado correctamente \n ===== \n');
	})
	.error(function(errors) {
		console.log(errors);
	});