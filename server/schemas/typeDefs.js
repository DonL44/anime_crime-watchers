// import the gql tagged template function
const { gql } = require('apollo-server-express');

//create typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    description: String
    friendCount: Int
    posts: [Post]
    friends: [User]
  }

  type Post {
    _id: ID
    postTitle: String
    postText: String
    createdAt: String
    username: String
    commentCount: Int
    comments: [Comment]
  }

  type Comment {
    _id: ID
    commentText: String
    createdAt: String
    username: String
  }

  type Query {
    users: [User]
    user(username: String!): User
    posts(username: String): [Post]
    post(_id: ID): Post
  }
`;

// export typeDefs
module.exports = typeDefs;