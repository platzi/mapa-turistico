define(['backbone', 'Leaflet', 'underscore'], function (Backbone, L, _) {
    'use strict';

    var MapView = Backbone.View.extend({
        el: '#mimapa',

        initialize: function () {
            _.bindAll(this);
            var self = this;
            self.model.tiles = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png');

            this.map = L.map('mimapa', {
                center: self.model.get('center'),
                zoom  : self.model.get('zoom')
            });

            this.map.on('locationfound', self.onLocationFound);
        },

        render: function () {
            this.map.addLayer(this.model.tiles);
            this.map.locate({
                enableHighAccuracy: false
            });
        },

        onLocationFound: function (position) {
            var self = this;
            self.map.setView(new L.LatLng(position.latlng.lat, position.latlng.lng), 12);

            self.model.set('lat', position.latlng.lat);
            self.model.set('lng', position.latlng.lng);
        },

        centerMap: function (lat, lng, name) {
            var marker = L.marker([lat,lng]);
            this.map.addLayer(marker);
            this.map.setView(new L.LatLng(lat,lng), 6);
            marker.bindPopup(name);
        }
    });

    return MapView;
});