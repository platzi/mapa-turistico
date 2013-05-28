define(['backbone', 'Leaflet'], function (Backbone, L) {
    'use strict';

    var MapView = Backbone.View.extend({
        el: '#mimapa',

        createMap: function () {
            var self  = this,
                tiles = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png');

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
                enableHighAccuracy: false
            });

            this.map.on('locationfound', onLocationFound);
        },

        centerMap: function(lat, lng, name) {
            var marker = L.marker([lat,lng]);
            this.map.addLayer(marker);
            this.map.setView(new L.LatLng(lat,lng), 6);
            marker.bindPopup(name);
        },

        render : function () {
            this.createMap();
        }
    });

    return new MapView();
});