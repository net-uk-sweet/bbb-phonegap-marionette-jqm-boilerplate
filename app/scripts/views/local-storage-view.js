define([

	// libs
	'jquery',
	'lodash',
	'backbone',

	'app',

	// templates
	'text!templates/local-storage.html'
],

function($, _, Backbone, App, template) {

	'use strict';

	var LocalStorageView = Backbone.Marionette.ItemView.extend({

		template: _.template(template),

		events: {
			'click button': 'handleDelete'
		},

		handleDelete: function() {
			this.model.destroy();
		},

		onClose: function() {

			// This lets us know the view is being cleaned up
			console.log('LocalStorageView.onClose');
		}
	});

	return LocalStorageView;
});