var Routes = Backbone.Router.extend({
	routes: {
		"": "homepage"
	},
	homepage: function(){
		console.log('estás en homepage');
	}
});