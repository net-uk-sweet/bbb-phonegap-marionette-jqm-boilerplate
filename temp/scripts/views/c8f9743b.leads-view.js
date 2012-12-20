define([

	'app',

	// libs
	'backbone',

	// Views
	'views/lead-view'
],

function(App, Backbone, LeadView) {

	'use strict';

	var LeadsView = Backbone.Marionette.CollectionView.extend({

		itemView: LeadView,

		initialize: function() {
			this.collection.on('change', this.render, this);
		}
	});

	return LeadsView;
});