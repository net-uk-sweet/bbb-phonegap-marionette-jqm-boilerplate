define([

	// libs
	'jquery',
	'lodash',
	'backbone',

	'app',

	// Views
	'views/lead-view'
],

function($, _, Backbone, App, LeadView) {

	'use strict';

	var LeadsView = Backbone.Marionette.CollectionView.extend({

		itemView: LeadView,

		initialize: function() {
			this.collection.on('change', this.render, this);
		},

		onClose: function() {

			// This lets us know the view is being cleaned up
			console.log('LeadsView.onClose');
		}
	});

	return LeadsView;
});