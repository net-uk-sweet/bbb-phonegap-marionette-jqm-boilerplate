define([

	// libs
	'jquery',
	'lodash',
	'backbone',

	'app'
],

function($, _, Backbone, App) {

	'use strict';

	var AdminView = Backbone.View.extend({

		// Use jQuery selector to associate view w/ existing DOM element
		el: '.container',

		events: {
			// Listen for click events which bubble up to this view
			// We can use jQuery selector to be more specific about which button
			// 'click button#submit': 'handleSubmit',
			// 'click button#reset': 'handleReset',
			// 'click button#delete': 'handleDelete',
		},

		initialize: function() {

			// This is essentially the constructor and is called on instantiation
			console.log('AdminView.initialize:' /*, this.$el */);
		},

		render: function() {

			console.log('AdminView.render:');

			this.$el.html('<h1>Welcome to the admin view</h1><p><a href="#">Back</a>');
		}
	});

	return AdminView;
});
