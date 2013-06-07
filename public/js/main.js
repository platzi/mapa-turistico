var app = {};

function onDocumentReady() {
	// modelos
	app.users = new UsersCollection();
	app.places = new PlacesCollection();

	// vistas
	app.map = new MapView();
	app.sidebar = new SidebarView();
	//app.login = new LoginView();
	app.addPlace = new AddPlaceView();
	app.header = new HeaderView();
	app.mcontextual = new MenuContextualView();
	// enrutador
	app.routes = new Routes();
	Backbone.history.start({ pushState: true });
}

$(document).on('ready', onDocumentReady);