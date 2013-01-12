define([

	// Libraries
	'jquery',
	'lodash',
	'backbone',
	'marionette',
	'app',

	// Collections
	'collections/leads-collection',

	// Views
	'views/login-view',
	'views/admin-view'
],

function($, _, Backbone, Marionette, App, LeadsList, LoginView, AdminView) {

	'use strict';

	return {

		handleIndexRoute: function() {

			console.log('Controller.handleIndexRoute:');
			
			// Fetch the leads list from local storage (webSQL)
			var leadsList = new LeadsList();
			leadsList.fetch({
				success: function(collection) {

					// Create a login view and pass it the collection
					App.main.show(
						new LoginView({ collection: collection })
					);
				}
			});
		},

		handleAdminRoute: function() {

			console.log('Controller.handleAdminRoute:');

			App.main.show(new AdminView());
		}
	};
});