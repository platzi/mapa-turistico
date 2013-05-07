var indexController = require('../application/controllers/index');

module.exports = function(app) {
    app.get('/', indexController);
};