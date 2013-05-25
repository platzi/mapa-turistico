var User = Backbone.Model.extend();

var UsersCollection = Backbone.Collection.extend({
	model: User,
	url: '/user.json',
	parse: function(data) {
		var model = _.map(data, function(model) {
			return {
				id: model.id,
				name: model.nombre + ' ' + model.apellido,
				email: model.correo
			};
		});

		return model;
	}
});