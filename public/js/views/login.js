var LoginView = Backbone.View.extend({
	el:'#logintt',
	initialize: function(){
		var self = this;
		var loginButton = $('#loginButton');
		function onLoginClick(e){
			e.preventDefault();
			self.$el.fadeToggle();
		}
		loginButton.on('click', onLoginClick);
	} 
});
