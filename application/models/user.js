var Sequelize = require("sequelize");
var sequelize = require('../../database/connect');

var User = sequelize.define('User', {
    usuario: Sequelize.STRING,
    imagen: Sequelize.STRING
});

module.exports = {
    getAll: function() {
        var query = sequelize.query("SELECT * FROM usuarios");

        query.success(function(rows) {
            console.log(rows);
        });
    },
    get: function(id) {

    },
    create: function(user) {
        
    }
};