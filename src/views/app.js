var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(exampleVideoData);
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    //this.$el(VideoPlayerView.prototype.render());
    new VideoPlayerView({
      el: this.$('.player'),
      collection: this.collection
    }).render();
    
    new VideoListView({
      el: this.$('.list'),
      collection: this.videos
    });
    
    new SearchView({
      el: this.$('.search'),
      collection: this.collection
    }).render();
    return this;
  },

  template: templateURL('src/templates/app.html')
  
});
