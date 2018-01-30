var Videos = Backbone.Collection.extend({

  model: Video,
  // url: '../data/exampleVideoData.js',
  
  initialize: function() {
    this.on('change', this.sort, this);
  },
  

});
