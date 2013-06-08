var LoginView = Backbone.View.extend({
	el:'#logintt',
	initialize: function(){
		var self, loginButton;

		self = this;
		loginButton = $('#loginButton');

		function onLoginClick(e){
			e.preventDefault();
			self.$el.fadeToggle();
		}

		loginButton.on('click', onLoginClick);
	}
});
