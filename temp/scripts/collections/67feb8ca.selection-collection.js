define([

	'app',

	// libs
	'backbone',

	// models
	'models/selection-model'

], function(App, Backbone, SelectionModel) {
	
	'use strict';

	// List of cars used to populate model selection carousel
	var SelectionList = Backbone.Collection.extend({

		model: SelectionModel

		// We'll populate this when on instantiation with hardcoded data
	});

	return SelectionList;
});