var MapView = Backbone.View.extend({
	el: '#mimapa',
	initialize: function() {
		this.createMap()
	},
	createMap: function() {
		this.map = L.map('mimapa', {
	    	center: [0, -28],
	    	zoom: 3,
	    	worldCopyJump: true
	    });

		var tiles = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

		this.map.addLayer(tiles);
	},
	centerMap: function(lat,lng,name) {
		var marker = L.marker([lat,lng]);
		this.map.addLayer(marker);

		this.map.setView(new L.LatLng(lat,lng), 6);

		marker.bindPopup(name);
		//this.map.zoomOut(3);

		//this.map.panInsideBounds(new L.LatLng(lat,lng));

	}

});