var MapView = Backbone.View.extend({
	el: '#mimapa',
	initialize: function() {
		this.createMap()
	},
	createMap: function() {
		var self = this;

		var tiles = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png');

		this.map = L.map('mimapa', {
	    	center: [0, -28],
	    	zoom: 4
	    });

	    function onLocationFound(position) {
	    	self.map.setView(new L.LatLng(position.latlng.lat, position.latlng.lng), 12);
	    }

		this.map.addLayer(tiles);

		this.map.locate({
			enableHighAccuracy: true
		});

		this.map.on('locationfound', onLocationFound);
	},
	centerMap: function(lat, lng, name) {
		var marker = L.marker([lat,lng]);

		this.map.addLayer(marker);

		this.map.setView(new L.LatLng(lat,lng), 6);

		marker.bindPopup(name);
	}
});