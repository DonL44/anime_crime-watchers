import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($email: String!, $password: String!, $username: String!) {
    addUser(email: $email, password: $password, username: $username) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($postText: String!) {
    addpost(postText: $postText) {
      _id
      postText
      createdAt
      username
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($postId: ID!, $commentBody: String!) {
    addComment(postId: $postId, commentBody: $commentBody) {
      _id
      commentCount
      comments {
        _id
        commentBody
        createdAt
        username
      }
    }
  }
`;

export const ADD_FRIEND = gql`
  mutation addFriend($id: ID!) {
    addFriend(friendId: $id) {
      _id
      username
      friendCount
      friends {
        _id
        username
      }
    }
  }
`;

export const REMOVE_FRIEND = gql`
  mutation removeFriend($id: ID!) {
    removeFriend(id: $id) {
      _id
      username
      friends {
        _id
        username
      }
    }
  }
`;

// export const SAVE_SAMURAI = gql`
//   mutation savesamurai($input: samuraiInput!) {
//     savesamurai(input: $input) {
//       _id
//       username
//       email
//       savedsamurais {
//         samuraiId
//         authors
//         description
//         title
//         image
// lololol
//         link
//       }
//     }
//   }
// `;

// export const REMOVE_SAMURAI = gql`
//   mutation removesamurai($samuraiId: ID!) {
//     removesamurai(samuraiId: $samuraiId) {
//       _id
//       username
//       email
//       savedsamurais {
//         samuraiId
//         authors
//         description
//         title
//         image
//         link
//       }
//     }
//   }
// `;
