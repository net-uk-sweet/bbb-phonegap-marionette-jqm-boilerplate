define([

	// libs
	'jquery',
	'lodash',
	'backbone',

	'app',

	// Views
	'views/local-storage-view'
],

function($, _, Backbone, App, LocalStorageView) {

	'use strict';

	var LocalStorageCollectionView = Backbone.Marionette.CollectionView.extend({

		itemView: LocalStorageView,

		initialize: function() {
			this.collection.on('change', this.render, this);
		},

		onClose: function() {

			// This lets us know the view is being cleaned up
			console.log('LocalStorageCollectionView.onClose');
		}
	});

	return LocalStorageCollectionView;
});