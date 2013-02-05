define([

	'app',

	// libs
	'backbone',

	// models
	'models/local-storage-model',
	'models/settings-model',

	// plugins
	'plugins/backbone-websql'
],

function(App, Backbone, LocalStorageModel, settingsModel) {
	
	'use strict';

	var LocalStorageCollection = Backbone.Collection.extend({

		model: LocalStorageModel,

		initialize: function() {

			/*
			* Create and open a database. If it doesn't exist, API will create it for us.
			* No need to worry about closing the resource when we're finished with it.
			*
			* @name			name of database
			* @version		version number of database (webkit implementation broken, but required to create / open)
			* @description	description of database
			* @size			estimated size of database (5mb the arbitrary limit before user prompted to expand)
			*/
			var db = openDatabase(settingsModel.get('dbName'), '1.0', 'Test database', 5 * 1024 * 1024);

			// Pass db resource to WebSQLStore class and use table leads
			this.store = new WebSQLStore(db, 'test');
		},

		// Use LocalStorage sync method set up in backbone-websql plugin
		sync: function(method, model, options) {
			return Backbone.LocalStorage.sync(method, model, options);
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

	return LocalStorageCollection;

});