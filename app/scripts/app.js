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

  // Adds any methods to be run after the app was initialized.
  App.addInitializer(function() {
    this.initAppLayout();
    this.initExtensions();
    this.initEvents();
  });

  App.on('initialize:before', function() {
    // console.log('App.initialize:before: ');
  });

  App.on('initialize:after', function(){
    // Can't use push state on Xcode
    Backbone.history.start({ pushState: false });
  });

  App.initAppLayout = function() {

    // Add the main regions
    App.addRegions({
      header: '#header',
      content: '#content',
      footer: '#footer'
    });
  };

  App.initExtensions = function() {

    var triggerCreate = function() {
      this.$el.trigger('create');
      return this;
    };

    // Override Marionette onRender event so it triggers 'create' on
    // element. This ensures dynamic content is given the JQM treatment
    Marionette.Region.prototype.onShow = triggerCreate;
    Marionette.View.prototype.onRender = triggerCreate;
  };

  App.initEvents = function() {

    // All links with the role attribute set to nav-main will be
    // handled by the application's router.
    $('a[data-role="nav-main"]').live('click', function(/*e*/) {
      navigate($(this).attr('href'));
    });

    App.vent.on('navigate', function(e) {
      navigate(e);
    });

    function navigate(url) {
      App.Router.navigate(url, { trigger: true });
    }
  };

  return App;

});
