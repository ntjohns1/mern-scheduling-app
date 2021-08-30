import { gql } from '@apollo/client';

export const GET_ME = gql`
query {
    me {
        _id
        username
        email
        }
    }
`;

export const GET_STUDENTS = gql `
query {
    users {
      _id
      username
      email
    }
  }
`;
