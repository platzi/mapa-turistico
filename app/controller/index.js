'use strict';

module.exports = function (req, res) {
    res.render('index', {
        title: 'Mapa en tiempo real',
        description: 'Mi primer mapa',
        profile: {
			"id": "51a2515fb358b1cc03000002",
			"username": "proudplaces",
			"provider": "twitter",
			"avatar": "https://si0.twimg.com/profile_images/3636820877/2b7b8014b81978b5cf1ed8e16f91a15e_normal.png"
		}
    });
};