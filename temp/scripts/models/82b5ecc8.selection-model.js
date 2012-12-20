define([

	'app',

	// libs
	'backbone'

], function(App, Backbone) {

	'use strict';

	// Represents an item on the model selection carousel
	// Selections will be pushed onto current the selection
	// property of the current Lead model.
	var SelectionModel = Backbone.Model.extend({

		defaults: {
			id: '12345', // expect model guid will be required for CRM
			name: 'CT',
			strapline: 'Go boldly',
			asset: 'images/ct.png',
			// Following only props which really need defaults
			brochure: false,
			ebrochure: false,
			testdrive: false
		}
	});
	
	return SelectionModel;
});