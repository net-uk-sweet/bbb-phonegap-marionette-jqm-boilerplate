// Set the require.js configuration for your application.
require.config({

  // Initialize the application with the main application file.
  deps: ['main'],

  paths: {
    // JavaScript folders.
    libs: '../scripts/libs',
    plugins: '../scripts/plugins', // Ours or 3rd party plugins / components

    // Libraries.
    jquery: '../scripts/libs/jquery', // 1.9.0
    jquerymobile: '../scripts/libs/jquery.mobile-1.2.0',
    lodash: '../scripts/libs/lodash', // 0.7.0
    backbone: '../scripts/libs/backbone', // 0.9.2
    marionette: '../scripts/libs/backbone.marionette', // 1.0.0-rc2
    text: '../scripts/libs/require/text' // 2.0.1 :- require plug-in which compiles our templates
  },

  shim: {

    // Backbone library depends on lodash and jQuery.
    backbone: {
      deps: ['lodash', 'jquery'],
      exports: 'Backbone'
    },

    // Marionette depends on jquery, lodash and backbone
    marionette : {
      deps : ['jquery', 'lodash', 'backbone'],
      exports : 'Marionette'
    },

    jquerymobile : ['jquery'],

    // Backbone webSQL depends on backbone
    'plugins/backbone-websql': ['backbone']
  }
});



