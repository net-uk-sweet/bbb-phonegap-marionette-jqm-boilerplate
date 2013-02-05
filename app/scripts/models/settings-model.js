define([

	//libs
	'backbone'
],

function(Backbone) {
	
	'use strict';

	var SettingsModel = Backbone.Model.extend({

		url: 'scripts/data/settings.json'
	});

	// NB. return an instance to ensure a single instance is used by all
	return new SettingsModel();
});