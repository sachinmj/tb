$(function(){
  // new WorkspaceRouter();
  // new HelpPaneRouter();
  // Backbone.history.start({pushState: true});
});

var Workspace = Backbone.Router.extend({
  // routes: {
  //   'pages': 'pages'
  // },
  //
  // pages: function(){
  //   console.log('Called Pages rout');
  //   var pagesView = new PagesView({});
  //   // pages.fetch();
  // }
});

// var workspace = new Workspace();

var Page = Backbone.Model.extend({});

var page = new Page();

var Pages = Backbone.Collection.extend({
  model: Page,
  url: '/pages.json',
});

var PagesList = Backbone.View.extend({
  tagName: 'div',
  collection: new Pages,
  initialize: function() {
    this.collection.fetch();
    console.log(this.collection.toJSON());
    this.collection.each(function(model){
      console.log(model.toJSON());
    })
    // this.listenTo(this.model, 'change', this.render);
  },
  render: function() {
      this.$el.html("In the view");
      // this.$('input').prop('checked', this.model.get('checked'));
      console.log("Inside PagesList render");
      return this.render;
  },
});
// var pages = new Pages({
//   // url: '/pages.json',
// });

var AppView = Backbone.View.extend({
  el: '#layout',

  initialize: function() {
    // this.collection = new Pages({});
    // this.listenTo(this.collection, 'reset', this.render);

  },

  render: function() {
    // console.log(this.collection.toJSON());
    // console.log(this.collection.toJSON()); // Prints the model as JSON.
    // console.log("Render function called!");
    this.$el.append(_.template(new PagesList()));
    // this.$el.html(this.template({
    //    model: this.model.toJSON()
    // }));
    return this;
  }

});

var appView = new AppView();
