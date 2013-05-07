function onDocumentReady() {
	var socket = io.connect(window.location.href);

    var map = L.map('mimapa', {
    	center: [0, -28],
    	zoom: 3
    });

	var tiles = L.tileLayer('http://a.tiles.mapbox.com/v3/calosth.map-v5t9aoe3/{z}/{x}/{y}.png');

	map.addLayer(tiles);

	// Plugin GeoSearch.
	// Nos permite ubicarnos en el mapa dando una direccion.
	// Asi como lo hace Google Maps, de echo usa como proveedor Google Maps.
	var geosearch = new L.Control.GeoSearch({
            provider: new L.GeoSearch.Provider.Google(),
            zoomLevel: 18
    }).addTo(map);

	map.locate({
		enableHighAccuracy: true
	});

	map.on('locationfound', onLocationFound);

	socket.on('coords:user', onReceiveData);

	function onLocationFound(position) {
		var mycoords = position.latlng;
		var marker = L.marker([mycoords.lat, mycoords.lng]);

		map.addLayer(marker);
		marker.bindPopup('<b>Estás aquí</b>');

		socket.emit('coords:me', {latlng: mycoords});
	}

	function onReceiveData(data) {
		var coordsUser = data.latlng;
		var marker = L.marker([coordsUser.lat, coordsUser.lng]);

		map.addLayer(marker);
		marker.bindPopup('Estás aquí');
	}

	// Efectos para mostrar/ocultar formulario.
	var $form = $('#formulario');
	var $place = $('#place');
	//Efecto para que se pueda mover el formulario.
	$form.draggable();

	// Mostrar formualrio al iniciar.
	$form.fadeIn();


	$('#cerrar').on('click', cerrarFormulario); // Ocultar formaulario.
	$('#guardar').on('click', guardarInformacion); // Guardar datos del lugar.	

	function cerrarFormulario(e){
		e.preventDefault();
		$form.fadeOut();
		$place.fadeOut();
	}

	function guardarInformacion(e){
		e.preventDefault();
		geosearch.geosearch($('#ubicacion').val());
		$form.fadeOut();
	}

	function clickLugar(){
		var id = $(this).attr('id');			
		var latlng = $(this).attr('data-latlng').split(','); 
		var marker = L.marker([latlng[0],latlng[1]]);				
		
		console.log(marker);
		console.log(latlng);
		console.log(id);

		map.addLayer(marker);		
		map.panTo(new L.LatLng(latlng[0],latlng[1]));		
		marker.bindPopup('Aqui es');

	}

	$("#places a").on('click', clickLugar);
}

$(document).on('ready', onDocumentReady);
