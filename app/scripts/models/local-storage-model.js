define([

	// libs
	'backbone'
],

function(Backbone) {

	'use strict';

	var LocalStorageModel = Backbone.Model.extend({

		defaults: {
			firstName: 'John',
			lastName: 'Doe',
			email: 'j.doe@notarealperson.com'
		},

		// Use LocalStorage sync method set up in backbone-websql plugin
		sync: function(method, model, options) {
			return Backbone.LocalStorage.sync(method, model, options);
		}
	});

	return LocalStorageModel;
});