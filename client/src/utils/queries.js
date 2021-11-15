import { gql } from '@apollo/client';

// User Queries

export const GET_ME = gql`
query {
    me {
        _id
        username
        email
        }
    }
`;

export const GET_STUDENT = gql`
  query user($_id: ID!) {
    user(_id: $_id) {
      username
      email
      messages {
        _id
        messageText
        messageAuthor
        createdAt
      }
    }
  }
`;

export const GET_STUDENTS = gql`
query {
  users {
    _id
    username
    email
  }
}
`;

// Event Queries

export const EVENTS_BY_DATE = gql`
query($dayRef: String) {
  eventsByDate(dayRef: $dayRef) {
    _id
    studentId
    studentName
  	time
  	dayRef
    description
  }
}
`;

export const GET_EVENT = gql`
query event($_id: ID!) {
  event(_id: $_id) {
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

