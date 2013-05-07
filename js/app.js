App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
  this.resource( 'index', { path: '/' } ); // Takes us to &quot;/&quot;
  this.resource('about', { path: '/about' });
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue', 'green'];
  }
});

App.AboutRoute = Ember.Route.extend({
  setupController: function(controller) {
    controller.set('content', ['web', 'mobile']);
  }
});
