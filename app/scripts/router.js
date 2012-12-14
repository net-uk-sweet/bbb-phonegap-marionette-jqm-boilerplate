define([
  // Application.
  'app',

  // models
  //"models/result-model",

  // collections
  'collections/leads-collection',
  'collections/selection-collection',

  // models
  'models/settings-model',

  // views
  'views/root-view',

  // components
  'components/backbone-websql'
],

function(app, LeadsList, SelectionList, SettingsModel, RootView) {

  'use strict';

  // Defining the application router, you can attach sub routers here.
  var Router = Backbone.Router.extend({
    routes: {
      '': 'index',
      'login': 'login',
      'home': 'home',
      'admin': 'admin',
    },


    login: function() {

    },

    home: function() {

    },

    index: function() {
      
      // // Create a collection for the model selection
      // var selectionList = new SelectionList([
      //   { id: 0, name: 'CT', strapline: 'Go Boldly', asset: 'images/ct.png'},
      //   { id: 1, name: 'IS', strapline: 'Award winning sports saloon', asset: 'images/is.png'},
      //   { id: 2, name: 'GS', strapline: 'A powerful change', asset: 'images/gs.png'},
      //   { id: 3, name: 'RX', strapline: 'The pioneering SUV', asset: 'images/RX.png'}
      // ]);

      // // Create a settings model
      // var settingsModel = new SettingsModel();

      // console.log('Router.index: cars: ' + selectionList.pluck('name'));
      // console.log('Router.index: pin: ' + settingsModel.getSetting('pin'));

      new RootView({ collection: new LeadsList() });
    },

    admin: function() {
      
      console.log('Router.admin:');
    }
  });

  return Router;

});
