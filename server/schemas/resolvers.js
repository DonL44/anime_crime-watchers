const Post = require("../models/Post");
const User = require("../models/User");


const resolvers = {
  Query: {
    // find all users
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('friends')
        .populate('posts');
    },
    // find a single user by username
    user: async (parent, { username}) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('friends')
        .populate('posts')
    },
    // find posts / find all posts by username
    posts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Post.find(params).sort({ createdAt: -1 });
    },
    // find one post by its id
    post: async (parent, { _id }) => {
      return Post.findOne({ _id });
    },

  }
};



module.exports = resolvers;
