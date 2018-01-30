var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.on('change:this.collection', this.render(), this);
  },
  
  render: function() {
    this.$el.children().detach();
    // var renderedVid = this.renderVideo(this.collection[0]);
    // console.log(renderedVid);
    this.$el.html(this.template());

    // new VideoListEntryView({
    //   el: this.$('.video-list'),
    //   collection: this.videos
    // }).render();
    //this.collection.forEach(this.renderVideo, this);
    console.log(this.collection);
    
    for (let i = 0; i < this.collection.models.length; i++) {
      let currentVideo = this.collection.models[i];
      let currentEl = $('.video-' + i);
      console.log(currentEl, currentVideo);      
      currentEl.innerHTML = currentVideo;
    }
    return this;
  },
  
  renderVideo: function(video) {
    var videoView = new VideoListEntryView({model: video}).render();
    this.$el.append(videoView.render().el);
    return videoView;
    // this.$el.html(this.template(videoView.render().el));
  },

  template: templateURL('src/templates/videoList.html')

});


