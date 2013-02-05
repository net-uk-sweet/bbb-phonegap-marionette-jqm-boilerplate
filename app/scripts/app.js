define([
  // Libraries.
  'jquery',
  'lodash',
  'backbone',
  'marionette',

  // Collections
  'collections/local-storage-collection',

  // models
  'models/settings-model'
],

function($, _, Backbone, Marionette, LocalStorageCollection, settingsModel) {

  'use strict';


  /* ======================================================================== */

  var App = new Backbone.Marionette.Application();

  // Set up basic paths.
  App.root = '/';

  // Create namespaces for the core actors
  App.models = {};
  App.collections = {};
  App.views = {};

  // Adds any methods to be run after the app was initialized.
  App.addInitializer(function() {
    this.initExtensions();
    this.initEvents();

    // We need the app settings before anything else
    settingsModel.fetch({
      success: _.bind(this.initLeadsList, this)
      // TODO: could abstract this app initialisation daisy-chaining into an AppModel
    });
  });

  App.initLeadsList = function() {

    // Cache a reference to the local storage list and fetch the data
    App.collections.localStorageCollection = new LocalStorageCollection();
    App.collections.localStorageCollection.fetch({
      success: function() {
        // Can't use push state on Xcode
        Backbone.history.start({ pushState: false });
      }
    });
  };

  App.on('initialize:before', function() {
    // console.log('App.initialize:before: ');
  });

  App.on('initialize:after', function(){
    // Can't use push state on Xcode
    // Backbone.history.start({ pushState: false });
  });

  App.initExtensions = function() {

    // Override Marionette onRender and onShow events so JQM 'create' event is
    // triggered on view's element. This ensures dynamically created is given
    // the jQuery Mobile treatment
    Marionette.View.prototype.onRender = Marionette.View.prototype.onShow = function() {
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
      // Makes navigation easy from nested views like so:
      // App.vent.trigger('navigate', 'url');
      navigate(e);
    });

    function navigate(url) {
      App.Router.navigate(url, { trigger: true });
    }

    // Close Marionette.View when it's been replaced by JQM changePage. Marionette handles
    // removal of associated DOM structure and unbinding of events.
    // TODO: thought live was deprecated in favour of on, but on doesn't appear to work here.
    $('div[data-role=page], div[data-role=dialog]').live('pagehide', function (/*e, ui */) {
        if (App.views.outgoing) {
          App.views.outgoing.close();
        }
    });
  };

  return App;

});
