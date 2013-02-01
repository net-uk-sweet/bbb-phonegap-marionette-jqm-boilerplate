define([

	'app',

	//libs
	'backbone'

],

function(App, Backbone) {
	
	'use strict';

	var SettingsModel = Backbone.Model.extend({

		url: 'scripts/settings.json'
	});

	// NB. return an instance to ensure a single instance is used by all
	return new SettingsModel();
});