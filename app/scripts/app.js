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

  // We can override Region open method to add a transition in
  Marionette.Region.prototype.open = function(view) {
    this.$el.hide();
    this.$el.html(view.el);
    this.$el.fadeIn('slow');
  };

  // Trigger the create event on page which JQM requires
  Marionette.CollectionView.prototype.onRender = function() {
    App.$page.trigger('create');
  };

  var App = new Backbone.Marionette.Application();

  // Set up basic paths.
  App.root = '/';

  // JQM page div
  App.$page = $('#page');

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
    // to ensure that elements are JQM-ified correctly when anything new is rendered.
    // See also the extension to Marionette.CollectionView above.
    // This is a good hook for that logic as the event is triggered any time the
    // Application level RegionManager is populated with a new view.
    App.main.on('show', function() {
      console.log('App.main.show: ');
      App.$page.trigger('create');
    });

    // Capture Application events
    App.vent.on('login:navigate', function(e) {
      // Could probably use this as a general purpose hook for nav
      // triggered from within our views
      App.Router.navigate(e, { trigger: true });
    });
  };

  return App;

});
