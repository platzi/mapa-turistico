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
	    	self.userLocation = {
	    		lat: position.latlng.lat,
	    		lng: position.latlng.lng
	    	};
	    }

	    this.map.addLayer(tiles);

		this.map.locate({
			enableHighAccuracy: true
		});

		this.map.on('locationfound', onLocationFound);
	},
	centerMap: function(lat, lng) {		
		this.map.setView(new L.LatLng(lat,lng), 14);		
	},
	addMarker: function(lat,lng, name, image, description){
		var marker = L.marker([lat,lng]); 
		this.map.addLayer(marker);
		var popupOptions =
	    {
	        'minWidth': '300px',
	        'maxWidth': '200px',
	        'closeButton': true
	    }
	    var htmlPopup='<p>'+name+'<br />'+description+'</p><br/><img src=../../'+image+' witdh=80 height=80 />';
		marker.bindPopup(htmlPopup,popupOptions);
	}
});