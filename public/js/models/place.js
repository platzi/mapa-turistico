var Place = Backbone.Model.extend();

var PlacesCollection = Backbone.Collection.extend({
	model: Place,
	url: '/place.json',
/*	parse: function(data) {
		var model = _.map(data, function(model) {
			return {
				id: model.id,
				name: model.nombre + ' ' + model.apellido,
				email: model.correo
			};
		});

		return model;
	}*/
});