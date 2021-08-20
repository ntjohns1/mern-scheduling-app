const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
  _id: ID
  username: String
  email: String
  password: String
  events: [Event]
}

  type Auth {
    token: ID!
    user: User
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Event {
    _id: ID
    year: Int
    month: Int
    day: Int
    hour: Int
    summary: String
    description: String
    calendar_id: String
    user_id: User
    comments: [Comment]
  }

  input AddEventInput {
    _id: ID
    year: Int
    month: Int
    day: Int
    hour: Int
    summary: String
    description: String
    calendar_id: String
    user_id: User
    comments: [Comment]   
  }

  type Query {
    users: [User]
    user(username: String!): User
    events(username: String): [Event]
    event(eventId: ID!): Event
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addEvent(input: AddEventInput): Event
    addComment(eventId: ID!, commentText: String!): Event
    removeEvent(eventId: ID!): Event
    removeComment(eventId: ID!, commentId: ID!): Event
  }
`;

module.exports = typeDefs;
