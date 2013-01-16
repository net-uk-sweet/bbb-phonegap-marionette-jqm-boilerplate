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
			//App.main.show(new LoginView());
			this.changePage(new LoginView());
		},

		handleAdminRoute: function() {

			console.log('Controller.handleAdminRoute:');

			// Fetch the leads list from local storage (webSQL)
			var that = this;
			var leadsList = new LeadsList();
			leadsList.fetch({
				// TODO: use bind to avoid callback scope silliness
				success: function(collection) {
					that.changePage(new AdminView({ collection: collection }));
				}
			});
		},

		handleComponentRoute: function() {

			console.log('Controller.handleComponentRoute:');

			this.changePage(new ComponentView());
		},

	    changePage: function(page) {
	        
	        $(page.el).attr('data-role', 'page');
	        page.render();
	        $('body').append($(page.el));
	        var transition = $.mobile.defaultPageTransition;
	        // // We don't want to slide the first page
	        // if (this.firstPage) {
	        //     transition = 'none';
	        //     this.firstPage = false;
	        // }
	        $.mobile.changePage($(page.el), { changeHash:false, transition: transition });
	    }
	};
});