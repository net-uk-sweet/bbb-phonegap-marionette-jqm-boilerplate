define([

	// libs
	'jquery',
	'lodash',
	'backbone',

	'app',

	// templates
	'text!templates/toolbar.html'
],

function($, _, Backbone, App, template) {

	'use strict';

	// TODO: fix positioning bug which appears when transitioning between pages

	var ToolbarView = Backbone.Marionette.ItemView.extend({

		template: _.template(template),

		events: {
			/*'click button': 'handleDelete'*/
		},

		initialize: function() {
			//this.visible = this.options.visible;
		},

		onShow: function() {
			// This feels a bit hacky, but for demo purposes will do...
			// Remove selected styling from all elements and then re-add to selected
			this.$el.find('a').removeClass('ui-btn-active ui-state-persist');
			this.$el.find('#' + this.options.url).addClass('ui-btn-active ui-state-persist');
		}
	});

	return ToolbarView;
});