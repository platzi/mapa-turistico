var app = {};

function onDocumentReady() {

	// modelos
	app.users = new UsersCollection();
	app.places = new PlacesCollection();

	// vistas
	app.map = new MapView();
	app.sidebar = new SidebarView();
	app.login = new LoginView();
	// enrutador
	app.routes = new Routes();
	Backbone.history.start({ pushState: true });
}

$(document).on('ready', onDocumentReady);