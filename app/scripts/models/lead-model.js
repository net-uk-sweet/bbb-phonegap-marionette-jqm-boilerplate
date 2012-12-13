define([

	// app
	'app',

	// libs
	'backbone'
],

function(App, Backbone) {

	'use strict';

	var LeadModel = Backbone.Model.extend({

		// Probably don't need to define defaults, but it's
		// useful at this stage to visualise how the model will look
		defaults: {
			title: 'Mr.',
			firstName: 'John',
			lastName: 'Doe',
			telephone: '01524 35199',
			postcode: 'LA1 3RP',
			house: '15',
			address1: 'Gleneagles Dr.',
			address2: 'Standen View',
			city: 'Lancaster',
			county: 'Lancashire',
			email: 'j.doe@notarealperson.com',
			replaceDate: '19.09.2013',
			currentVehicle: 'Citreon Picasso',
			considering: ['Sherman tank', 'Hummer'],
			whyLexus: 'Styling'
		},

		test: function() {
			console.log("Test:", this.id);
		}
	});

	return LeadModel;
});