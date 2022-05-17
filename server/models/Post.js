const { Schema, model } = require('mongoose');


const postSchema = new Schema(
  {
    postTitle: {
      type: String,
      required: 'Let us know what this post is about!',
      minlength: 1,
      maxlength: 25
    },
    postText: {
      type: String,
      required: '...you forgot to write something...',
      minlength: 3,
      maxlength: 500
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    username: {
      type: String,
      required: true
    },
    comments: [commentSchema]
  },
  {
    toJson: {
      getters: true,
      virtuals: true
    }
  }
);

postSchema.virtual('commentCount').get(function() {
  return this.comments.length;
});

const Post = model('Post', postSchema);

module.exports = Post;