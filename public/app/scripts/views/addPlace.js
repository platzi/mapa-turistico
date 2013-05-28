define([
        'backbone',
        'jquery',
        'underscore',
        '../views/map',
        '../countries',
        'jqueryform'
    ], function (Backbone, $, _, mapView, countries) {
        var AddPlaceView = Backbone.View.extend({
            el: '#agregar-sitio',

            initialize: function () {
                var self,
                    countryPlace,
                    htmlCountries,
                    geolocationOption,
                    $latInput,
                    $lgnInput;

                self = this;
                $latInput = $('#latPlace'),
                $lgnInput = $('#lngPlace');

                $form = $('#form-agregar-sitio');
                htmlCountries = '';
                countryPlace = $('#countryPlace');
                geolocationOption = $('#geolocationOption');

                function getUserGeolocation() {
                    $latInput.val(mapView.userLocation.lat);
                    $lgnInput.val(mapView.userLocation.lng);
                }

                function onSubmitForm(e) {
                    e.preventDefault();
                    $(this).ajaxSubmit({
                        success: function() {
                            self.hide();
                        }
                    });
                }

                _.each(countries, function(country) {
                    htmlCountries += '<option value="' + country + '">' + country + '</option>';
                });

                countryPlace.append(htmlCountries);

                geolocationOption.on('click', getUserGeolocation);

                $form.on('submit', onSubmitForm);
            },

            hide: function () {
                $('#agregar-sitio').fadeToggle();
            }
        });

        return AddPlaceView;
    });