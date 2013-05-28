var SidebarView = Backbone.View.extend({
	el: '#placeList',
	events: {
		"click .elemList": "onClickSidebar"
	},
	addPlaces: function(places) {
	    var htmlPlaces = "";

	    _.each(places.toJSON(), function(place, index){
	    	htmlPlaces += '<article data-lat="' + place.point.lat + '" data-lng="' + place.point.lng + '" class="elemList" id="' + place._id + '">';
	    	htmlPlaces += '<figure><div class="thumb"><img src="' + place.image + '" /></div>';
	    	htmlPlaces += '<figcaption class="caption"><p class="name">' + place.name + '</p>';
	    	htmlPlaces += '<p class="description">' + place.description.substring(0,80) + '...</p></figcaption></figure>';
	    	htmlPlaces += '</article>';
	    });

	    this.$el.html(htmlPlaces);
	},
	onClickSidebar: function(param){
		var placeId = param.currentTarget.id;

		var placeLat = $("#" + placeId).attr("data-lat");
		var placeLng = $("#" + placeId).attr("data-lng");
		var placeName = $("#" + placeId + " .name").text();

		app.map.centerMap(placeLat, placeLng, placeName);
	}
});