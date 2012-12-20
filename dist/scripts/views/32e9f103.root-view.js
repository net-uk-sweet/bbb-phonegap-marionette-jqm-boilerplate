define([

	'app',

	// libs
	'backbone',

	// models
	'models/lead-model'
],

function(App, Backbone, LeadModel) {

	'use strict';

	var RootView = Backbone.View.extend({

		// Use jQuery selector to associate view w/ existing DOM element
		el: '.container',

		events: {
			// Listen for click events which bubble up to this view
			// We can use jQuery selector to be more specific about which button
			'click button#submit': 'handleSubmit',
			'click button#reset': 'handleReset',
			'click button#delete': 'handleDelete',
		},

		initialize: function() {

			// This is essentially the constructor and is called on instantiation
			console.log('RootView.initialize:' /*, this.$el */);

			// Call render on load or clear (reset) of the collection,
			// also on add or removal of model
			this.collection.on('reset add remove', this.render, this);
			this.collection.fetch();
		},

		render: function() {

			console.log('RootView.render:');

			var length = this.collection.length;

			// Get latest model from localStorage or use a default if there are none
			this.model = length ?
				this.collection.at(length - 1) :
				new LeadModel(/* use defaults */);

			// Render the contents of the model to the page
			$('#leads').html(
				// This is the sort of donkey work which templates save us from
				'<br /><b>Latest lead from localStorage:</b>' +
				'<br />FirstName: ' + this.model.get('firstName') +
				'<br />LastName: ' + this.model.get('lastName') +
				'<br />Email: ' + this.model.get('email')
			);
		},

		handleSubmit: function() {

			console.log('RootView.handleClick:');

			var firstName = $('#firstName');
			var lastName = $('#lastName');
			var email = $('#email');

			// Create a new model based on values in inputs
			this.collection.create({
				firstName: firstName.val(),
				lastName: lastName.val(),
				email: email.val()
			});

			firstName.val('');
			lastName.val('');
			email.val('');
		},

		handleReset: function() {
			this.collection.reset();
		},

		handleDelete: function() {
			this.model.destroy();
		}
	});

	return RootView;
});
