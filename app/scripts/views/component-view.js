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

		template: _.template(componentTemplate),

		events: {
			// Listen for click events which bubble up to this view
			// We can use jQuery selector to be more specific about which button
			// 'click button#submit': 'handleSubmit',
			// 'click button#reset': 'handleReset',
			// 'click button#delete': 'handleDelete',
		}
	});

	return ComponentView;
});
