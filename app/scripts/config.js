// Set the require.js configuration for your application.
require.config({

  // Initialize the application with the main application file.
  /*deps: ['main'],*/

  paths: {
    // JavaScript folders.
    libs: '../scripts/libs',
    plugins: '../scripts/plugins',

    // Libraries.
    domReady: '../scripts/libs/domReady',
    jquery: '../scripts/libs/jquery',
    jquerymobile: '../scripts/libs/jquery.mobile-1.2.0',
    /*'jquerymobile.config': 'jquerymobile.config',*/
    lodash: '../scripts/libs/lodash',
    backbone: '../scripts/libs/backbone',
    marionette: '../scripts/libs/backbone.marionette',
    text: '../scripts/libs/text' // this compiles our templates
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

    // jquerymobile : {
    //   deps : ['jquery', 'jquerymobile.config']
    // },
    // 'jquerymobile.config' : ['jquery'],

    // Backbone webSQL depends on backbone
    'components/backbone-websql': ['backbone']
  }
});

// Includes File Dependencies
require([

  'jquery',
  'backbone',
  'app',

  // Main router
  'router'
],

function($, Backbone, App, router) {

  'use strict';

  var deviceReadyDeferred = $.Deferred();
  var jqmReadyDeferred = $.Deferred();

  function start() {
    
    console.log('Main.start:');

    // Prevents all anchor click handling including the addition of active button state and alternate link bluring.
    $.mobile.linkBindingEnabled = false;

    // Disabling this will prevent jQuery Mobile from handling hash changes
    $.mobile.hashListeningEnabled = false;

    App.Router = router;
    App.start();
  }

  function onDeviceReady(isDevice) {
    console.log('Main.onDeviceReady: running on a device: ' + (isDevice !== false));
    deviceReadyDeferred.resolve();
  }

  $(document).on('mobileinit', function() {
    console.log('Main.mobileinit: ');
    jqmReadyDeferred.resolve();
  });

  if (navigator.userAgent.match(/(iPad|iPhone|Android)/)) {
    // This is running on a device so waiting for deviceready event
    document.addEventListener('deviceready', onDeviceReady, false);
  } else {
    // On desktop don't have to wait for anything
    onDeviceReady(false);
  }

  // Only proceed when PhoneGap and jqm are initialised
  $.when(deviceReadyDeferred, jqmReadyDeferred).then(start);

  require(['jquerymobile']);
});

