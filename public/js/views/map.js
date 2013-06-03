var MapView = Backbone.View.extend({
	el: '#mimapa',
	initialize: function() {
		this.createMap();
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
	// addMarker: function(lat,lng, name, image, description){
	addMarker: function(city, country, lat, lng, image, name) {
		var marker = L.marker([lat,lng]);
		this.map.addLayer(marker);
		var popupOptions =
	    {
	        'minWidth': '300px',
	        'maxWidth': '200px',
	        'closeButton': true
	    }
	    // var htmlPopup='<p id="namePlacetest">'+name+'<br />'+description+'</p><br/><img src=../../'+image+' id="ea" witdh=100 height=100 />';
	    var htmlPopup = '';
	    htmlPopup += '<div id="popupPlace">';
	    htmlPopup +='<img src=../../' + image + ' />';
	    htmlPopup +='<p id="popupName">' + name + '</p>';
	    htmlPopup += '<p><i class="icon-map-marker"></i> ' + city + ', ' + country + '.</p>';
	    htmlPopup += '<p id="popupDet"><a href="">Ver mas detalles...</a></p>';
	    htmlPopup += '</div>';

		marker.bindPopup(htmlPopup,popupOptions);
	},
	onClickLatLng: function(e) {
		//console.log(e.latlng.toString());
		$('#manualOption').attr('checked', 'checked')
		$('#coordsLtnLng').val(e.latlng.toString().slice(7, -1));
		$('#agregar-sitio').show();
		var coords = $('#coordsLtnLng').val().split(',');
		$('#latPlace').val(coords[0]);
		$('#lngPlace').val(coords[1]);
	}
});