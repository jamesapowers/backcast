var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.listenTo(this.videos, 'sync', this.selectFirst);
    this.videos.search('javascript tutorial');
    this.render();
  },

  // events: {
  //   'click': 'handleClick'
  // },

  // handleClick: function(e) {
  //   if (e.target.className === 'video-list-entry-title') {
  //     console.log($(e.currentTarget));
  //     new VideoPlayerView({
  //       el: this.$('.player'),
  //       collection: this.videos
  //     }).render(e.target);
  //   }
  // },

  selectFirst: function() {
    if (this.videos.length > 0) {
      this.videos.at(0).select();
    }
  },

  render: function() {
    this.$el.html(this.template());
    //this.$el(VideoPlayerView.prototype.render());
    new VideoPlayerView({
      el: this.$('.player'),
      collection: this.videos
    }).render();
    
    new VideoListView({
      el: this.$('.list'),
      collection: this.videos
    }).render();
    
    new SearchView({
      el: this.$('.search'),
      collection: this.collection
    }).render();
    
    return this;
  },

  template: templateURL('src/templates/app.html')
  
});
