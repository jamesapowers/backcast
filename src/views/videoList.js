var VideoListView = Backbone.View.extend({

  initialize: function() {
    // this.on('change:this.collection', this.render(), this);
  },
  
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    
    for (let i = 0; i < this.collection.models.length; i++) {
      let currentVideo = this.collection.models[i];
      this.renderVideo(currentVideo);
    }
  //   return this;
  },
  
  renderVideo: function(video) {
    var videoView = new VideoListEntryView({model: video});
    this.$el.children().append(videoView.render().el);
    return videoView;
  },

  template: templateURL('src/templates/videoList.html')

});


