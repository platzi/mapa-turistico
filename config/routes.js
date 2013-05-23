var indexController = require('../application/controllers/index');

module.exports = function(app, database) {
    app.get('/', indexController);
};