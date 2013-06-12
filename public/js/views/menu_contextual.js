var MenuContextualView;

MenuContextualView = Backbone.View.extend({
    el: '#menuContextual',
    x: '',
    y: '',
    lat: '',
    lng: '',

    events: {
        'click #agregar': 'addPlace'
    },
    addPlace: function () {
        this.$el.css({'display': 'none'});
        $('#coords').show();
        $('#manualOption').attr('checked', true);
        $('input[type=radio]').attr('disabled', 'disabled');
        $('#latPlace').val(this.lat);
        $('#lngPlace').val(this.lng);
        $('#coordsLtnLng').val(this.lat + ',' + this.lng);
        $('#agregar-sitio').fadeIn('fast');

    }
});