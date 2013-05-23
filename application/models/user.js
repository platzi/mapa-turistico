/*
	Modelo Usuarios, ver http://www.sequelizejs.com/documentation#models-definition
*/

var Sequelize = require("sequelize");
var sequelize = require('../../database/connect');

var User = sequelize.define('User', {
	usuario: Sequelize.STRING,
	imagen: Sequelize.STRING
});

module.exports = User;