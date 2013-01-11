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

    App.Router = router;
    App.start();
  }

  function onDeviceReady(isDevice) {
    console.log('Main.onDeviceReady: running on a device: ' + (isDevice !== false));
    deviceReadyDeferred.resolve();
  }

  // jQuery Mobile configuration
  $(document).on('mobileinit', function() {

    console.log('Main.mobileinit:');
    // TODO: would be nice to abstract this into a separate configuration file

    // Prevents all anchor click handling including the addition of active button state and alternate link blurring.
    $.mobile.linkBindingEnabled = false;

    // Disabling this will prevent jQuery Mobile from handling hash changes
    $.mobile.hashListeningEnabled = false;
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