define([

	// libs
	'jquery',
	'lodash',
	'backbone',

	'app',

	// Views
	'views/local-storage-collection-view',

	// Templates
	'text!templates/admin.html'
],

function($, _, Backbone, App, LocalStorageCollectionView, template) {

	'use strict';

	var AdminView = Backbone.Marionette.Layout.extend({

		// Resolves to admin.html in templates directory
		template: _.template(template),

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
			console.log('AdminView.initialize:' /*, this.$el */);
		},

		onRender: function() {

			console.log('AdminView.onRender:');

			this.leads.show(
				new LocalStorageCollectionView({
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
