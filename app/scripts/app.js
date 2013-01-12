define([
  // Libraries.
  'jquery',
  'lodash',
  'backbone',
  'marionette'
],

function($, _, Backbone, Marionette) {

  'use strict';


  /* ======================================================================== */

  var App = new Backbone.Marionette.Application();

  // Set up basic paths.
  App.root = '/';

  // Add the main region, that will hold the page layout.
  App.addRegions({
    // Backbone.Marionette views will use the content div
    // of our jqm page as their target
    main: '#content'
  });

  // Adds any methods to be run after the app was initialized.
  App.addInitializer(function() {
    this.initAppEvents();
  });

  App.on('initialize:before', function() {
    // console.log('App.initialize:before: ');
  });

  App.on('initialize:after', function(){
    // Can't use push state on Xcode
    Backbone.history.start({ pushState: false });
  });

  App.initAppEvents = function() {

    // console.log('App.initAppEvents:');

    // All links with the role attribute set to nav-main will be
    // handled by the application's router.
    $('a[data-role=nav-main]').click(function(e) {
      e.preventDefault();
      App.Router.navigate($(this).attr('href'), {
        trigger: true
      });
    });

    // -----------------------------------------
    // Handle other application events here

    // We need to trigger a 'create' event on our page (pageContainer)
    // any time anything changes to ensure that elements are jqm-ified correctly
    App.main.on('show', function() {
      // TODO: more thought required here :- this will only fire when the
      // app region changes and the hardcoding of the selector is problematic
      $('#page').trigger('create');
    });

    // Capture Application events
    App.vent.on('test:submit', function(e) {
      // e is the event payload
      console.log('App.vent.test:submit: ', e);
    });
  };

  return App;

});
