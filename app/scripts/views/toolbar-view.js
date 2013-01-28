define([

	// libs
	'jquery',
	'lodash',
	'backbone',

	'app',

	// templates
	'text!templates/toolbar.html'
],

function($, _, Backbone, App, toolbarTemplate) {

	'use strict';

	var ToolbarView = Backbone.Marionette.ItemView.extend({

		template: _.template(toolbarTemplate),

		events: {
			/*'click button': 'handleDelete'*/
		},

		onShow: function() {
			this.$el.navbar();
		}
	});

	return ToolbarView;
});