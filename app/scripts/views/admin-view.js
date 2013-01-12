define([

	// libs
	'jquery',
	'lodash',
	'backbone',

	'app',

	// templates
	'text!templates/login.html'
],

// TODO: we can use this view to demonstrate integration of various jqm components
function($, _, Backbone, App, loginTemplate) {

	'use strict';

	var AdminView = Backbone.Marionette.ItemView.extend({

		template: _.template(loginTemplate),

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

		onShow: function() {

			console.log('AdminView.onShow:');

			//this.$el.html('<h1>Welcome to the admin view</h1><p><a href="#">Back</a>');
		}
	});

	return AdminView;
});
