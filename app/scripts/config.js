// Set the require.js configuration for your application.
require.config({

  // Initialize the application with the main application file.
  deps: ['main'],

  paths: {
    // JavaScript folders.
    libs: '../scripts/libs',
    plugins: '../scripts/plugins',

    // Libraries.
    jquery: '../scripts/libs/jquery',
    jquerymobile: '../scripts/libs/jquery.mobile-1.2.0',
    lodash: '../scripts/libs/lodash',
    backbone: '../scripts/libs/backbone',
    marionette: '../scripts/libs/backbone.marionette',
    text: '../scripts/libs/require/text' // require plug-in which compiles our templates
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
    'components/backbone-websql': ['backbone']
  }
});



