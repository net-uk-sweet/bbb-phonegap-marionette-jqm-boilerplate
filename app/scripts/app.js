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

  // Need to manage incoming and outgoing views so we can call Marionette.View.close
  // method on the outgoing view when JQM has hidden it.
  App.incoming = null;
  App.outgoing = null;

  // Adds any methods to be run after the app was initialized.
  App.addInitializer(function() {
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

  App.initExtensions = function() {

    // Override Marionette onRender event so it triggers 'create' on
    // element. This ensures dynamic content is given the JQM treatment
    Marionette.View.prototype.onRender = function() {
      this.$el.trigger('create');
      return this;
    };
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

    // Close Marionette.View when it's been replaced by JQM
    $('div[data-role=page], div[data-role=dialog]').live('pagehide', function (/*e, ui */) {
      // TODO: thought live was deprecated in favour of on
        if (App.outgoing) {
          App.outgoing.close();
        }
    });
  };

  return App;

});
