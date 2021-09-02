import { gql } from '@apollo/client';

// User Mutations

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const UPDATE_USER = gql`
mutation(
    $_id: ID!,
    $username: String,
    $email: String
 ) {
  updateUser(
    _id: $_id, 
    username: $username, 
    email: $email
    ) {
    _id
  }
 }`;

export const DELETE_USER = gql`
mutation(
    $_id: ID!
) {
  deleteUser(_id: $_id) {
    _id
  }
}`;

// Message Mutations

export const ADD_MESSAGE = gql`
mutation($_id: ID!, $messageText: String) {
  addMessage(_id: $_id, messageText: $messageText) {
    _id
    messageText
    messageAuthor
    createdAt
  }
}`;
