var Routes = Backbone.Router.extend({
	routes: {
		"": "homepage"
	},
	homepage: function(){
		app.places.fetch({
			success: function(collection, data){
				app.sidebar.addPlaces(collection);
			}
		});

		// app.place = new Place({
		// 	name: "Hackaton @proudplaces",
		// 	city: "Martinez de la Torre",
		// 	country: "Mexico",
		// 	description: "Siguiendo el hackaton de @proudplaces.",
		// 	lat: 24.523938,
		// 	lng: -54.92828,
		// 	image: "http://placekitten.com/100/100"
		// });

		// app.place.save();
	}
});