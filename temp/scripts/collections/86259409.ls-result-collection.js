define([

	"app",

	// libs
	"backbone",

	// models
	"models/result-model",

	// components
	"components/backbone.localStorage"	
], 

function(App, Backbone, ResultModel) {
	
	var LSResultList = Backbone.Collection.extend({

		localStorage: new Backbone.LocalStorage('com.amaze.helloBackbone'),
		model: ResultModel
	});

	return LSResultList; 	

});