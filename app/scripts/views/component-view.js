define([

	// libs
	'jquery',
	'lodash',
	'backbone',

	'app',

	// templates
	'text!templates/component.html'
],

function($, _, Backbone, App, componentTemplate) {

	'use strict';

	var ComponentView = Backbone.Marionette.ItemView.extend({

		// Add the attributes JQM expects to the view's element
		attributes: function() {
			return {
				'data-url': 'component',
				'data-role': 'page'
			};
		},

		// Resolves to component.html in templates directory
		template: _.template(componentTemplate),

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
