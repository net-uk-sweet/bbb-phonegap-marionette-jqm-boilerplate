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

		onRender: function() {
			// TODO: Need to come up with something more robust than this
			$('div[data-role="page"]').trigger('create');
		}
	});

	return LeadsView;
});