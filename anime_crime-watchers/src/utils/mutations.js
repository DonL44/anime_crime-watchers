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