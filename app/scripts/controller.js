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
	'views/dialog-view'
],

function($, _, Backbone, Marionette, App, LeadsList, LoginView, AdminView, ComponentView, DialogView) {

	'use strict';

	return {

		handleIndexRoute: function() {

			console.log('Controller.handleIndexRoute:');
			
			// We'll always want to go straight to log-in on startup
			this.handleLoginRoute();
		},

		handleLoginRoute: function() {

			console.log('Controller.handleLoginRoute:');

			// It's really just nav at the moment
			this.changeView(new LoginView());
		},

		handleAdminRoute: function() {

			console.log('Controller.handleAdminRoute:');

			// Fetch the leads list from local storage (webSQL)
			var that = this;
			var leadsList = new LeadsList();
			leadsList.fetch({
				// TODO: use bind here to avoid callback scope silliness
				success: function(collection) {
					that.changeView(new AdminView({ collection: collection }));
				}
			});
		},

		handleComponentRoute: function() {

			console.log('Controller.handleComponentRoute:');

			this.changeView(new ComponentView());
		},

		handleDialogRoute: function() {

			console.log('Controller.handleDialogRoute:');

			this.changeView(new DialogView(), 'pop');
		},

	    changeView: function(view, transition) {
	        
	        var $el = view.$el;

	        App.outgoing = App.incoming;
	        App.incoming = view;

	        view.render();
	        $('body').append($el);

	        $.mobile.changePage($el, {
	        	changeHash: false,
	        	transition: transition || $.mobile.defaultPageTransition
	        });
	    }
	};
});