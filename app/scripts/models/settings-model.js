define([

	'app',

	//libs
	'backbone'

],

function(App, Backbone) {
	
	'use strict';

	var SettingsModel = Backbone.Model.extend({

		// Can't see many advantages to having this in external JSON
		defaults: {
			pin: '12345',
			crm: 'http://lexus.co.uk/crm/'
		},

		initialize: function() {
			console.log('SettingsModel.intialize:');
		}
	});

	// NB. we return an instance in this case
	return new SettingsModel();
});