define([

	// libs
	'jquery',
	'lodash',
	'backbone',

	'app',

	// templates
	'text!templates/component.html'
],

function($, _, Backbone, App, template) {

	'use strict';

	var ComponentView = Backbone.Marionette.ItemView.extend({

		// Resolves to component.html in templates directory
		template: _.template(template),

		// Map events from view's element (this.el) to view handlers
		events: {
			/*'click button': 'handleClick'*/
		},

		// Constructor function, called on initialization
		initialize: function() {

			console.log('ComponentView.initialize:' /*, this.$el */);
		},

		onClose: function() {

			// This lets us know the view is being cleaned up
			console.log('ComponentView.onClose');
		}
	});

	return ComponentView;
});
