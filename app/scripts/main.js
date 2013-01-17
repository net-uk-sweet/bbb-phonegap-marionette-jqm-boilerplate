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

  // Start up the application
  function start() {
    
    console.log('Main.start:');

    App.Router = router;
    App.start();
  }

  // Phonegap device ready handler
  function onDeviceReady(isDevice) {
    console.log('Main.onDeviceReady: running on a device: ' + (isDevice !== false));
    deviceReadyDeferred.resolve();
  }

  // jQuery Mobile configuration
  $(document).on('mobileinit', function() {

    console.log('Main.mobileinit:');

    // TODO: would be nice to abstract this into a separate configuration file
    $.mobile.ajaxEnabled = false;
    $.mobile.linkBindingEnabled = false;
    $.mobile.hashListeningEnabled = false;
    $.mobile.pushStateEnabled = false;
    $.mobile.defaultPageTransition = 'slide';
  });

  if (navigator.userAgent.match(/(iPad|iPhone|Android)/)) {
    // This is running on a device so waiting for deviceready event
    document.addEventListener('deviceready', onDeviceReady, false);
  } else {
    // On desktop don't have to wait for anything
    onDeviceReady(false);
  }

  // Only proceed when PhoneGap and jqm are loaded
  $.when(deviceReadyDeferred, jqmReadyDeferred).then(start);

  // Now handlers are set up we can load jqm
  require(['jquerymobile'], function() {
    jqmReadyDeferred.resolve();
  });
});