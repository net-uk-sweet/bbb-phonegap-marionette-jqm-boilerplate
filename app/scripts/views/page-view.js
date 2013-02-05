define([

	// libs
	'jquery',
	'lodash',
	'backbone',

	'text!templates/page.html'
],

// Attempt at a generic view to represent a jQuery Mobile page.
// Uses the second inheritance example from Addy Osmani's excellent free book:
// http://addyosmani.github.com/backbone-fundamentals/
function($, _, Backbone, template) {

	'use strict';

	var PageView = function(options) {

		// Put all PageView initialization code here
		Backbone.Marionette.Layout.apply(this, [options]);
	};

	_.extend(PageView.prototype, Backbone.Marionette.Layout.prototype, {

		// Add attributes JQM expects
		attributes: function() {
			return {
				// For dialogs to work correctly, url will need to be unique
				'data-url': 'page',
				'data-role': 'page'
			};
		},

		// Resolves to page.html in templates directory
		template: _.template(template),

		regions: {
			// Subviews can target these regions of the template
			header: '#header',
			content: '#content' /*,
			footer: '#footer' */
		},

		onRender: function() {
			// Views for the regions are passed in via the options
			this.header.show(this.options.header);
			this.content.show(this.options.content);
		}
	});

	PageView.extend = Backbone.Marionette.Layout.extend;

	return PageView;
});