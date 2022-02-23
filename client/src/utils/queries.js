import { gql } from '@apollo/client';

// User Queries

export const GET_ME = gql`
query {
    me {
        _id
        username
        email
        firstName
        lastName
        }
    }
`;

export const GET_STUDENT = gql`
  query user($_id: ID!) {
    user(_id: $_id) {
      username
      email
      firstName
      lastName
      messages {
        _id
        messageText
        messageAuthor
        createdAt
      }
      address {
        street1
        street2
        city
        state
        zip
        phone1
        phone2
        parentGuardian1
        parentGuardian2
        parentGuardian3
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
    firstName
    lastName
    isTeacher
  }
}
`;

// Event Queries

export const EVENTS_BY_DATE = gql`
query($dayRef: String) {
  eventsByDate(dayRef: $dayRef) {
    _id
    studentId
    firstName
    lastName
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
    firstName
    lastName
    date
    dayRef
    time
    description
  }
}
`;

