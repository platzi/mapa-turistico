var AddPlaceView;

AddPlaceView = Backbone.View.extend({
    el:'#agregar-sitio',

    initialize: function(){
        var self, addPlaceButton;

        self = this;
        addPlaceButton = $('#addButton');

        function onAddPlaceClick(e) {
            e.preventDefault();
            self.$el.fadeToggle();
        }

        addPlaceButton.on('click', onAddPlaceClick);
    }
});