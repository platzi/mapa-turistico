function onDocumentReady() {
	var socket = io.connect(window.location.href);

    var map = L.map('mimapa', {
    	center: [0, -28],
    	zoom: 3
    });

	var tiles = L.tileLayer('http://a.tiles.mapbox.com/v3/calosth.map-v5t9aoe3/{z}/{x}/{y}.png');

	map.addLayer(tiles);

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
	var $form = $("#formulario");
	$form.fadeIn(); // Mostrar formualrio al iniciar.
	// Oculta el formulario.
	$("#cerrar").on("click", function(e){
		e.preventDefault();
		$form.fadeOut();
	});
	//Efecto para que se pueda mover el formulario.
	$form.draggable();
}

$(document).on('ready', onDocumentReady);




