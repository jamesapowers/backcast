var VideoListEntryView = Backbone.View.extend({

  initialize: function() {
    // this.on('selected', function() {
    //   console.log('clicked on VLEV');
    //   VideoPlayerView.render;
    // }, this);
  },

  // events: {
  //   'click': 'handleClick'
  // },

  // handleClick: function(e) {
  //   if (e.target.className === 'video-list-entry-title') {
  //     $('.video-player').children().detach();
  //     var newPlayer = new VideoPlayerView;//(this.model.attributes);
  //     newPlayer.render(this.model.attributes);
  //     console.log(newPlayer);
  //     // new VideoPlayerView({
  //     //   el: $('.player'),
  //     //   collection: this.collection
  //     // }).render();
  //   }
  // },

  render: function() {
    //console.log(this);
    // this.$el.html(this.template(this.model.attributes));
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
