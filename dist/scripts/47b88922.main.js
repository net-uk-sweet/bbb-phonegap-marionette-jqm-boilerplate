define([

  // Libraries
  'jquery',
  'domReady',

  // Application
  'app',

  // Main router
  'router'
],

function($, domReady, App, router) {

  'use strict';

  // Phonegap specific boilerplate to ensure app isn't initialised
  // until the deviceReady event is fired
  domReady(function() {

    //console.log("Main.domReady");

    function onDeviceReady(/*desktop*/) {

      console.log('onDeviceReady: creating apps'/*, App */);
      App.Router = router;
      App.start();
      console.log('After app');
      // console.log('App.Router' + App.Router);
    }

    if (navigator.userAgent.match(/(iPad|iPhone|Android)/)) {
      // This is running on a device so waiting for deviceready event
      // We won't see this statement in phonegap logs because device isn't ready
      console.log('on a device (or phonegap)');
      document.addEventListener('deviceready', onDeviceReady, false);
    } else {
      // On desktop don't have to wait for anything
      console.log('not on a device in the browser');
      onDeviceReady(true);
    }
  });
});
