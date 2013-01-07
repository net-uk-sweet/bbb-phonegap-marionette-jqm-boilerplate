define([
  // Libraries.
  'jquery',
  'lodash',
  'backbone',
  'marionette'
],

// TODO: do we need to import Marionette?
function($, _, Backbone, Marionette) {

  'use strict';


  /* =========================================================================
   * The following will make Marionette's template retrieval work with
   * in both development (templates found in html files) and production
   * environment (templates all compiled AS JST templates into the require.js
   * file. This will also use JST instead of the Marionette.TemplateCache.
   */
  Backbone.Marionette.Renderer.render = function(templateId, data) {
    var path = 'templates/' + templateId + '.html';

    // Localize or create a new JavaScript Template object.
    var JST = window.JST = window.JST || {};

    // Make a blocking ajax call (does not reduce performance in production,
    // because templates will be contained by the require.js file).
    if (!JST[path]) {
      $.ajax({
        url: App.root + path,
        async: false
      }).then(function(templateHtml) {
        JST[path] = _.template(templateHtml);
      });
    }

    if (!JST[path]) {
      var msg = 'Could not find "' + templateId + '"';
      var error = new Error(msg);
      error.name = 'NoTemplateError';
      throw error;
    }

    // Call the template function with the data.
    return JST[path](data);
  };
  
  /* ======================================================================== */

  var App = new Backbone.Marionette.Application();

  // Set up basic paths.
  App.root = '/';

  // Add the main region, that will hold the page layout.
  App.addRegions({
    main: '#main'
  });

  // Adds any methods to be run after the app was initialized.
  App.addInitializer(function() {
    this.initAppLayout();
    this.initAppEvents();
  });

  App.on('initialize:before', function() {
    console.log('App.initialize:before: ');
  });

  App.on('initialize:after', function(){
    // Can't use push state on Xcode
    console.log('App.initialize: starting history');
    Backbone.history.start({ pushState: true });
  });

  // The main initializing function sets up the basic layout and its regions.
  App.initAppLayout = function() {

    var MainLayout = Backbone.Marionette.Layout.extend({
      template: 'main',
      regions: {
        header: '#header',
        content: '#content',
        footer: '#footer'
      }
    });

    // Set the main layout
    App.main.show(new MainLayout());
  };
  
  App.initAppEvents = function() {

    // All links with the role attribute set to nav-main will be
    // handled by the application's router.
    $('a[role=nav-main]').click(function(e) {
      e.preventDefault();
      App.Router.navigate($(this).attr('href'), {
        trigger: true
      });
    });

    // -----------------------------------------
    // Handle other application events here

    App.vent.on('survey:submit', function(/*e*/) {
      // e is the SurveyModel instance passed as event object
      // Add the populated filter data to the model and update route
      //App.Result.set({ filters: e.get('filters') });
      //App.Router.navigate('wall/' + e.get('wallId'), { trigger: true });
    });
  };

  return App;

});
