var LoginView = Backbone.View.extend({	
	el:'#logintt',
	initialize: function(){
		console.log("entro a esta cosa");
		var self = this;
		var loginButton = $('#loginButton');
		function onLoginClick(e){
			e.preventDefault();
			self.$el.fadeToggle();
		}
		loginButton.on('click', onLoginClick);
	}
});
