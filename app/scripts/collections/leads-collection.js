define([

	'app',

	// libs
	'backbone',

	// models
	'models/lead-model',

	// components
	'plugins/backbone-websql'
],

function(App, Backbone, LeadModel) {
	
	'use strict';

	var LeadsList = Backbone.Collection.extend({

		model: LeadModel,

		initialize: function() {

			/*
			* Create and open a database. If it doesn't exist, API will create it for us.
			* No need to worry about closing the resource when we're finished with it.
			*
			* @name			name of database
			* @version		version number of database (webkit implementation broken, but required to create / open)
			* @description	description of database
			* @size			estimated size of database (5mb the arbitrary limit before user prompted to expand)
			* @success		success callback
			*/
			// Set a massive db limit to test on device for expected prompt
			var db = openDatabase('com.amaze.helloBackbone', '1.0', 'Lexus customer leads', 1000 * 1024 * 1024);
			// var db = openDatabase('com.amaze.helloBackbone', '1.0', 'Lexus customer leads', 5 * 1024 * 1024);

			// Pass db resource to WebSQLStore class and use table leads
			this.store = new WebSQLStore(db, 'leads');
		},

		// Override Backbone.Collection's default reset method to ensure that
		// the data in localStorage (webSQL) is removed
		reset: function(models, options) {

			// Nothing in Backbone.Collection or underscore to loop backwards :(
			for (var i = this.length - 1; i >= 0; i --) {
				this.at(i).destroy({ silent: true });
			}

			// This is the equivalent of calling the superclass method (Backbone.Collection.reset())
			Backbone.Collection.prototype.reset.call(this, models, options);
		},
	});

	return LeadsList;

});