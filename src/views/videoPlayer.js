var VideoPlayerView = Backbone.View.extend({


  render: function() {
    //console.log(this.$el.html('<div class="loading">Please wait...</div>'));
    
    this.on('change', this.render, this);
    this.$el.html('<div class="loading">Please wait...</div>');
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
