define([

	// Libraries
	'backbone',
	'marionette',
	'app',

	// Collections
	'collections/leads-collection',

	// Views
	'views/login-view'
],

function(Backbone, Marionette, App, LeadsList, LoginView) {

	'use strict';

	return {

		handleIndexRoute: function() {

			console.log('Controller.handleIndexRoute:');

			// Getch the leads list from webSQL
			var leadsList = new LeadsList();
			leadsList.fetch({
				success: function(collection) {
					// Create a login view and pass it the collection
					App.main.currentView.content.show(
						new LoginView({ collection: collection })
					);
				}
			});
		},

		handleAdminRoute: function() {

			console.log('Controller.handleAdminRoute:');
		}
	};
});