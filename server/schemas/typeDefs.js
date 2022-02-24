const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
  _id: ID
  username: String
  email: String
  password: String
  firstName: String
  lastName: String
  address: Address
  isTeacher: Boolean
  autoNotify: Boolean
  events: [Event]
  messages: [Message]
}

  type Auth {
    token: ID!
    user: User
  }

  type Message {
    _id: ID
    messageText: String
    messageAuthor: String
    createdAt: String
  }

  type Email {
    _id: ID
    email: String
    senderName: String
    toEmail: String
    subject: String
    text: String
  }
  type Address {
    _id: ID
    street1: String
    street2: String
    city: String
    state: String
    zip: String
    phone1: String
    phone2: String
    parentGuardian1: String
    parentGuardian2: String
    parentGuardian3: String
  }

  type Event {
    _id: ID
    studentId: ID
    firstName: String
    lastName: String
    date: String
    dayRef: String
    time: String
    description: String
  }

  type Media {
    _id: ID
    title: String
    description: String
    postedBy: User
    createdAt: String
    updatedAt: String
  }

  input AddMediaInput {
    _id: ID
    title: String
    description: String
    postedBy: User
    createdAt: String
    updatedAt: String
  }

  input UpdateUserInput {
    _id: ID!
    username: String
    email: String
}

  input AddEventInput {
    _id: ID
    studentId: ID
    firstName: String
    lastName: String
    date: String
    dayRef: String
    time: String
    description: String
  }

  input SendEmailInput {
    _id: ID
    email: String
    senderName: String
    toEmail: String
    subject: String
    text: String
  }

  type Query {
    users: [User]
    user(_id: ID!): User
    events: [Event]
    eventsByDate(dayRef: String): [Event]
    event(_id: ID!): Event
    me: User
    media(_id: ID!): Media
    allMedia: [Media]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!, firstName: String, LastName: String): Auth
    updateUser(
      _id: ID
      username: String
      email: String
      autoNotify: Boolean
    ): User
    deleteUser(_id: ID!): User
    login(email: String!, password: String!): Auth
    addEvent(input: AddEventInput): Event
    updateEvent(input: AddEventInput): Event
    addMessage(_id: ID!, messageText: String): Message
    sendEmail(input: SendEmailInput): Email
    deleteEvent(_id: ID!, userId: ID): Event
    removeMessage(userId: ID!, messageId: ID!): User
    addMedia(input: AddMediaInput): Media
    deleteMedia(_id: ID): Media
    updateMedia(input: AddMediaInput)
  }
`;

module.exports = typeDefs;
