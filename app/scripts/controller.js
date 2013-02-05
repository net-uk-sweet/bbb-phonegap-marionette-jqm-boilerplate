define([

	// Libraries
	'jquery',
	'lodash',
	'backbone',
	'marionette',
	'app',

	// Models
	'models/local-storage-model',

	// Views
	'views/toolbar-view',
	'views/page-view',
	'views/login-view',
	'views/admin-view',
	'views/component-view',
	'views/dialog-view'
],

function($, _, Backbone, Marionette, App, LocalStorageModel, ToolbarView, PageView, LoginView, AdminView, ComponentView, DialogView) {

	'use strict';

	return {

		handleIndexRoute: function() {

			console.log('Controller.handleIndexRoute:');
			
			// We'll always want to go straight to log-in on startup
			this.handleLoginRoute();
		},

		handleLoginRoute: function() {

			console.log('Controller.handleLoginRoute:');

			// Repetition could be avoided here by creating further abstract
			// classes based on the PageView class. These could handle population
			// of the header and footer regions which may not change from page
			// to page.

			this.changeView(new PageView({
				header: new ToolbarView({ url: 'login' }),
				content: new LoginView()
			}));
		},

		handleAdminRoute: function() {

			console.log('Controller.handleAdminRoute:');

			this.changeView(new PageView({
				header: new ToolbarView({ url: 'admin' }),
				content: new AdminView({
					collection: App.collections.localStorageCollection
				})
			}));
		},

		handleComponentRoute: function() {

			console.log('Controller.handleComponentRoute:');

			this.changeView(new PageView({
				header: new ToolbarView({ url: 'component' }),
				content: new ComponentView()
			}));
		},

		handleDialogRoute: function() {

			console.log('Controller.handleDialogRoute:');

			// TODO: need to abstract DialogView creation as we have with standard pages
			// TODO: fix routing with dialogs on close (currently resets to index route)
			this.changeView(new DialogView(), 'pop');
		},

		// Based on the following example from Christophe Coenraets:
		// http://coenraets.org/blog/2012/03/using-backbone-js-with-jquery-mobile/
	    changeView: function(view, transition) {
	        
	        var $el = view.$el;

	        App.views.outgoing = App.views.incoming;
	        App.views.incoming = view;

	        view.render();
	        $('body').append($el);

	        $.mobile.changePage($el, {
	        	changeHash: false,
	        	transition: transition || $.mobile.defaultPageTransition
	        });
	    }
	};
});