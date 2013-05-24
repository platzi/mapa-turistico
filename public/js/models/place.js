var Place = Backbone.Model.extend();

var PlacesCollection = Backbone.Collection.extend({
	model: Place,
	url: '/place'
});