var VideoPlayerView = Backbone.View.extend({

  // initialize: function() {
  //   this.on('click', this.render(), this);
  // },
  

  render: function(selectedVideo) {
    //console.log(this.$el.html('<div class="loading">Please wait...</div>'));
    console.log(this.$el);
    this.$el.children().children().detach();
    selectedVideo = selectedVideo || this.collection.models[0].attributes;
    this.on('change', this.render, this);
    this.$el.html(this.template(selectedVideo));

    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
