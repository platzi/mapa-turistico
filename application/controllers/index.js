module.exports = function(req, res) {
	var User = require('../models/user');

	User.find({ usuario: 'administrador' });

	res.render('index', {
		title: 'Mapa en tiempo real',
		description: 'Mi primer mapa'
	});
};