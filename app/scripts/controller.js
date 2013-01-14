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
	'views/admin-view',
	'views/component-view'
],

function($, _, Backbone, Marionette, App, LeadsList, LoginView, AdminView, ComponentView) {

	'use strict';

	return {

		handleIndexRoute: function() {

			console.log('Controller.handleIndexRoute:');
			
			// We'll always want to go straight to log-in on startup
			this.handleLoginRoute();
		},

		handleLoginRoute: function() {

			console.log('Controller.handleLoginRoute:');

			// It's really just a nav view for the time being
			App.main.show(new LoginView());
		},

		handleAdminRoute: function() {

			console.log('Controller.handleAdminRoute:');
			
			// Fetch the leads list from local storage (webSQL)
			var leadsList = new LeadsList();
			leadsList.fetch({
				success: function(collection) {

					// Create a basic admin view and pass it the collection
					App.main.show(
						new AdminView({ collection: collection })
					);
				}
			});
		},

		handleComponentRoute: function() {

			console.log('Controller.handleComponentRoute:');

			App.main.show(new ComponentView());
		}
	};
});