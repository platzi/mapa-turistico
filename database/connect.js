var Sequelize, sequelize, config, app, environment, data;

sequelize = null;

function connect() {
    if (!sequelize) {
        // Dependencias Node JS
        Sequelize = require("sequelize");

        // Recopilamos lo que necesitamos
        config = require('../config/environments');
        app = require('../app');

        // Preparando la conexión
        environment = app.settings.env;
        data = config[environment].database;

        return sequelize = new Sequelize(data.database, data.user, data.password, { host: data.host }); // Conexión
    }

    return sequelize;
}

module.exports = connect();