var SidebarView = Backbone.View.extend({
	el: '#sidebar',
	addPlaces: function(places) {		
	    console.log(places);

	    var htmlPlaces = '<ul>';

	    _.each(places.toJSON(), function(place, index){
	    	htmlPlaces += '<li>' + place.name + '</li>';
	    });
	    htmlPlaces += '</ul>';
	    this.$el.html(htmlPlaces);
	}
});