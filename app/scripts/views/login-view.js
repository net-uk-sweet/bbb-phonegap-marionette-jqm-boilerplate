define([

	// libs
	'jquery',
	'lodash',
	'backbone',

	'app',

	// Views
	'views/leads-view',

	// Templates
	'text!templates/login.html'
],

function($, _, Backbone, App, LeadsView, loginTemplate) {

	'use strict';

	var LoginView = Backbone.Marionette.Layout.extend({

		// Resolves to login.html in templates directory
		template: _.template(loginTemplate),

		regions: {
			// Subviews can target these regions of the template
			leads: '#leads'
		},

		events: {
			// Listen for click events which bubble up to this view
			// We can use jQuery selector to be more specific about which button
			'click button#submit': 'handleSubmit',
			'click button#delete': 'handleDelete',
			'click button#test': 'handleTest'
		},

		initialize: function() {

			// This is essentially the constructor and is called on instantiation
			console.log('LoginView.initialize:' /*, this.$el */);
		},

		onShow: function() {

			console.log('LoginView.onShow:');

			this.leads.show(
				new LeadsView({
					collection: this.collection
				})
			);
		},

		handleSubmit: function() {

			console.log('LoginView.handleSubmit:');

			var firstName = $('#firstName');
			var lastName = $('#lastName');
			var email = $('#email');

			// Create a new model based on values in inputs
			this.collection.create({
				firstName: firstName.val(),
				lastName: lastName.val(),
				email: email.val()
			});

			firstName.val('');
			lastName.val('');
			email.val('');
		},

		handleDelete: function() {
			this.collection.reset();
		},

		handleTest: function() {
			App.vent.trigger('test:submit', 'Hello App (from LoginView)');
		}
	});

	return LoginView;
});
