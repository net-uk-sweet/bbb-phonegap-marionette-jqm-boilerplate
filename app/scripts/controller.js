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
	'views/component-view',
	'views/dialog-view', 
	'views/toolbar-view'
],

function($, _, Backbone, Marionette, App, LeadsList, LoginView, AdminView, ComponentView, DialogView, ToolbarView) {

	'use strict';

	return {

		handleIndexRoute: function() {

			console.log('Controller.handleIndexRoute:');
			
			// We'll always want to go straight to log-in on startup
			this.handleLoginRoute();
		},

		handleLoginRoute: function() {

			console.log('Controller.handleLoginRoute:');

			App.header.show(new ToolbarView());
			App.content.show(new LoginView());
			App.footer.show(new ToolbarView());
		},

		handleAdminRoute: function() {

			console.log('Controller.handleAdminRoute:');

			// Fetch the leads list from local storage (webSQL)
			var leadsList = new LeadsList();
			leadsList.fetch({
				success: function(collection) {
					App.content.show(new AdminView({ collection: collection }));
				}
			});
		},

		handleComponentRoute: function() {

			console.log('Controller.handleComponentRoute:');

			App.content.show(new ComponentView());
		},

		handleDialogRoute: function() {

			console.log('Controller.handleDialogRoute:');

			// TODO: figure out dialog approach
		}
	};
});