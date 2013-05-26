var MapView = Backbone.View.extend({
	el: '#mimapa',
	initialize: function() {
		this.createMap()
	},
	createMap: function() {
		var tiles = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

		var map = L.map('mimapa', {
	    	center: [0, -28],
	    	zoom: 10,
	    	worldCopyJump: true
	    });

	    function onLocationFound(position) {
	    	map.setView(new L.LatLng(position.latlng.lat, position.latlng.lng), 10);
	    }

		map.addLayer(tiles);

		map.locate({
			enableHighAccuracy: true
		});

		map.on('locationfound', onLocationFound);

		this.map = map;
	},
	centerMap: function(lat, lng, name) {
		var marker = L.marker([lat,lng]);

		this.map.addLayer(marker);

		this.map.setView(new L.LatLng(lat,lng), 6);

		marker.bindPopup(name);
	}

});