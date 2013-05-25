var MapView = Backbone.View.extend({
	el: '#mimapa',
	initialize: function() {
		this.createMap()
	},
	createMap: function() {
		this.map = L.map('mimapa', {
	    	center: [0, -28],
	    	zoom: 3
	    });

		var tiles = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
		this.map.addLayer(tiles);		
	}
});