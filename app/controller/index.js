'use strict';

module.exports = function (req, res) {    	
	var prof = req.user;	
	console.log(prof);
    res.render('index', {
        title: 'Mapa en tiempo real',
        description: 'Mi primer mapa',  
        profile: prof             
    });
};