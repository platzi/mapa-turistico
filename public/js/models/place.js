var Place = Backbone.Model.extend({
	url: '/places',
	defaults: {
		name: "Nombre lugar",
		city: "Ciudad",
		country: "País",
		description: "Lorem Ipsum",
		lat: 0,
		lng: 0,
		image: "imagen"
	},
	validate: function(attributes, options) {
		
	}
});

var PlacesCollection = Backbone.Collection.extend({
	model: Place,
	url: '/places'
});