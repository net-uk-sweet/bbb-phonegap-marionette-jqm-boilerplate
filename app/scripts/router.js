define([

  // Libraries
  'backbone',
  'marionette',
  'controller'
],

function(Backbone, Marionette, controller) {

  'use strict';

  var AppRouter = Backbone.Marionette.AppRouter.extend({

    appRoutes: {
      '': 'handleIndexRoute',
      'login': 'handleLoginRoute',
      'admin': 'handleAdminRoute',
      'component': 'handleComponentRoute',
      'dialog': 'handleDialogRoute'
    }
  });

  return new AppRouter({ controller: controller });
});
