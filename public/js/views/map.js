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

	    function menucontextual(e) {
	    	console.log(e);
	    	$('#menuContextual').css({
	    		'display': 'block',
	    		'left': e.originalEvent.pageX,
	    		'top': e.originalEvent.pageY
	    	});
	    	// $('#menuContextual').show();
	    }

	    this.map.addLayer(tiles);
		this.map.locate({
			enableHighAccuracy: true
		});
		this.map.on('locationfound', onLocationFound);
		this.map.on('contextmenu', menucontextual);
	},
	centerMap: function(lat, lng) {
		this.map.setView(new L.LatLng(lat,lng), 14);
	},
	addMarker: function(city, country, lat, lng, image, name) {
		var marker = L.marker([lat,lng]);
		this.map.addLayer(marker);
		var popupOptions = {
	        'minWidth': '300px',
	        'maxWidth': '200px',
	        'closeButton': true
	    };
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
		$('#manualOption').attr('checked', 'checked')
		$('#agregar-sitio').show();
		$('#latPlace').val(e.latlng.lat);
		$('#lngPlace').val(e.latlng.lng);
		$('#coordsLtnLng').val(e.latlng.lat + ',' + e.latlng.lng);
	}
});