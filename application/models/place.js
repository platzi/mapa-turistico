var Sequelize = require("sequelize");
var sequelize = require('../../database/connect');

var Place = sequelize.define('Place', {
    titulo: Sequelize.STRING,
    descripcion: Sequelize.STRING,
    latlng: Sequelize.STRING,
    imagen: Sequelize.STRING
});

module.exports = Place;