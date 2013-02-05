define([

	// libs
	'jquery',
	'lodash',
	'backbone',

	'app',

	// templates
	'text!templates/dialog.html'
],

function($, _, Backbone, App, template) {

	'use strict';

	var DialogView = Backbone.Marionette.ItemView.extend({

		// Add the attributes JQM expects to the view's element
		attributes: function() {
			return {
				'data-url': 'dialog',
				'data-role': 'dialog'
			};
		},

		// Resolves to dialog.html in templates directory
		template: _.template(template),

		// Map events from view's element (this.el) to view handlers
		events: {
			'click button': 'handleClick'
		},

		// Constructor function, called on initialization
		initialize: function() {

			console.log('LoginView.initialize:' /*, this.$el */);
		},

		onShow: function() {

			console.log('LoginView.onShow:');
		},

		handleClick: function(e) {
			// Trigger navigate event on Application
			App.vent.trigger('navigate', $(e.currentTarget).val());
		},

		onClose: function() {

			// This lets us know the view is being cleaned up
			console.log('DialogView.onClose');
		}
	});

	return DialogView;
});
