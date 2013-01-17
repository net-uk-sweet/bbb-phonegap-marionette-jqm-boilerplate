define([

	// libs
	'jquery',
	'lodash',
	'backbone',

	'app',

	// templates
	'text!templates/login.html'
],

function($, _, Backbone, App, loginTemplate) {

	'use strict';

	var LoginView = Backbone.Marionette.ItemView.extend({

		// Add the attributes JQM expects to the view's element
		attributes: function() {
			return {
				'data-url': 'login',
				'data-role': 'page'
			};
		},

		// Resolves to login.html in templates directory
		template: _.template(loginTemplate),

		// Map events from view's element (this.el) to view handlers
		events: {
			'click button': 'handleClick'
		},

		// Constructor function, called on initialization
		initialize: function() {

			console.log('LoginView.initialize:' /*, this.$el */);
		},

		handleClick: function(e) {
			// Trigger navigate event on Application
			App.vent.trigger('navigate', $(e.currentTarget).attr('id'));
		},

		onClose: function() {

			// This lets us know the view is being cleaned up
			console.log('LoginView.onClose');
		}
	});

	return LoginView;
});
