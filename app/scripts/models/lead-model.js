define([

	// libs
	'backbone'
],

function(Backbone) {

	'use strict';

	var LeadModel = Backbone.Model.extend({

		// Don't want defaults when we get going, but it's handy
		// at this stage to visualise how the model will look
		defaults: {
			eventId: '123456', // Events will be maintained until user synchs
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
			otherVehicles: ['Sherman tank', 'Hummer'],
			whyLexus: 'Styling',
			// probably want defaults for these
			selections: [ /* array or collection of Selection models */ ],
			complete: false
		},

		sync: function(method, model, options) {
			return Backbone.LocalStorage.sync(method, model, options);
		}
		
		// TODO: if possible we should mirror naming used in CRM db
	});

	return LeadModel;
});