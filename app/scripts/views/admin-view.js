define([

	// libs
	'jquery',
	'lodash',
	'backbone',

	'app',

	// Views
	'views/leads-view',

	// Models
	'models/settings-model',

	// Templates
	'text!templates/admin.html'
],

function($, _, Backbone, App, LeadsView, settingsModel, adminTemplate) {

	'use strict';

	var AdminView = Backbone.Marionette.Layout.extend({

		// Resolves to admin.html in templates directory
		template: _.template(adminTemplate),

		regions: {
			// Subviews can target these regions of the template
			leads: '#leads'
		},

		// Map events from view's element (this.el) to view handlers
		events: {
			'click button#submit': 'handleSubmit',
			'click button#delete': 'handleDelete'
		},

		// Constructor function, called on initialization
		initialize: function() {

			// This is essentially the constructor and is called on instantiation
			console.log('AdminView.initialize:', settingsModel.get('pin') /*, this.$el */);
		},

		onShow: function() {

			console.log('AdminView.onRender:');

			this.leads.show(
				new LeadsView({
					collection: this.collection
				})
			);
		},

		handleSubmit: function() {

			console.log('AdminView.handleSubmit:');

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

		onClose: function() {

			// This lets us know the view is being cleaned up
			console.log('AdminView.onClose');
		}
	});

	return AdminView;
});
