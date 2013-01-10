define([

  // Libraries
  'jquery',
  'domReady',

  // Application
  'app',

  // Main router
  'router',
],

function($, domReady, App, router) {

  'use strict';

  // Phonegap specific boilerplate to ensure app isn't initialised
  // until the deviceReady event is fired
  domReady(function() {

    //console.log("Main.domReady");

    function onDeviceReady() {
      start(true);
    }

    function start(isDevice) {
      console.log('Main.start: running on a device: ' + isDevice);
      App.Router = router;
      App.start();
    }

    if (navigator.userAgent.match(/(iPad|iPhone|Android)/)) {
      // This is running on a device so waiting for deviceready event
      document.addEventListener('deviceready', onDeviceReady, false);
    } else {
      // On desktop don't have to wait for anything
      start(false);
    }
  });
});
