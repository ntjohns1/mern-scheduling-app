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
 }
 `;

export const DELETE_USER = gql`
mutation(
    $_id: ID!
) {
  deleteUser(_id: $_id) {
    _id
  }
}
`;

// Event Mutations

export const ADD_EVENT = gql`
mutation($input: AddEventInput) {
  addEvent(input:$input) {
    date
  }
}
`;

export const ADD_EVENT_AND_EMAIL = gql`
mutation($AddEventInput: AddEventInput, $SendEmailInput: SendEmailInput) {
  addEvent(input:$AddEventInput) {
    date
  }
  sendEmail(input:$SendEmailInput) {
    email
    senderName
    subject
    text
  }
}
`;

export const UPDATE_EVENT = gql`
mutation($input: AddEventInput) {
  updateEvent(input: $input) {
    _id
    studentId
    studentName
    date
    dayRef
    time
    description
  }
}
`;

export const DELETE_EVENT = gql`
mutation($_id: ID!) {
  deleteEvent(_id: $_id) {
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

// Email Mutation

export const SEND_EMAIL = gql`
mutation($input: SendEmailInput) {
  sendEmail(input:$input) {
    email
    senderName
    subject
    text
  }
}`;



