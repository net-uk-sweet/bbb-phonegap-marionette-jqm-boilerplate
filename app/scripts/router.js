define([
  // Application.
  'app',

  // models
  //"models/result-model",

  // collections
  //'collections/ls-result-collection',
  'collections/sql-result-collection',

  // views
  'views/root-view',

  // components
  'components/backbone-websql'
],

function(app, SQLResultList, RootView) {

  'use strict';

  // Defining the application router, you can attach sub routers here.
  var Router = Backbone.Router.extend({
    routes: {
      '': 'index',
      'admin': 'admin'
    },

    index: function() {

      console.log('Router.index:');

      var rootView = new RootView({ collection: new SQLResultList() });
    },

    admin: function() {
      
      console.log('Router.admin:');
    }
  });

  return Router;

});
