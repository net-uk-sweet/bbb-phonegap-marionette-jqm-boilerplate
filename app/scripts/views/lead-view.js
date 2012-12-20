define([

	'app',

	// libs
	'backbone'
],

function(App, Backbone) {

	'use strict';

	var LeadView = Backbone.Marionette.ItemView.extend({

		template: 'lead',

		events: {
			'click button': 'handleDelete'
		},

		handleDelete: function() {
			this.model.destroy();
		}
	});

	return LeadView;
});