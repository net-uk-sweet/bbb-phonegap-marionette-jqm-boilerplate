// Set the require.js configuration for your application.
require.config({

  // Initialize the application with the main application file.
  deps: ['main'],

  paths: {
    // JavaScript folders.
    libs: '../scripts/libs',
    plugins: '../scripts/plugins',

    // Libraries.
    domReady: '../scripts/libs/domReady',
    jquery: '../scripts/libs/jquery',
    lodash: '../scripts/libs/lodash',
    backbone: '../scripts/libs/backbone',
    marionette: '../scripts/libs/backbone.marionette'
  },

  shim: {

    // Marionette depends on backbone
    marionette: {
      deps: ['backbone'],
      exports: 'Backbone.Marionette'
    },

    // Backbone library depends on lodash and jQuery.
    backbone: {
      deps: ['lodash', 'jquery'],
      exports: 'Backbone'
    },

    // Backbone webSQL depends on backbone
    'components/backbone-websql': ['backbone']
  }

});