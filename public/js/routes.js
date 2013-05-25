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
		console.log('estás en homepage');
	}
});