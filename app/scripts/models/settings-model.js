define([

	'app',

	//libs
	'backbone'

],

function(App, Backbone) {
	
	'use strict';

	var SettingsModel = Backbone.Model.extend({

		// Might want to switch settings depending on environment
		env: 'dev',

		dev: { pin: '12345' },
		production: { pin: '54321' },

		getSetting: function(key) {
			return this[this.env][key];
		}
	});

	return SettingsModel;
});