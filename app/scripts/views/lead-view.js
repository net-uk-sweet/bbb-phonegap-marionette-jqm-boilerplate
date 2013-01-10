define([

	// libs
	'jquery',
	'lodash',
	'backbone',

	'app',

	// templates
	'text!templates/lead.html'
],

function($, _, Backbone, App, leadTemplate) {

	'use strict';

	var LeadView = Backbone.Marionette.ItemView.extend({

		template: _.template(leadTemplate),

		events: {
			'click button': 'handleDelete'
		},

		handleDelete: function() {
			this.model.destroy();
		}
	});

	return LeadView;
});