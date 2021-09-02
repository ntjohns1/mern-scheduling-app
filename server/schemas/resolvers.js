const { AuthenticationError } = require('apollo-server-express');
const { User, Event, Message } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('events');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('events');
    },
    events: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Event.find(params).sort({ createdAt: -1 });
    },
    event: async (parent, { eventId }) => {
      return Event.findOne({ _id: eventId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('events');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    updateUser: async (parent, { _id, username, email }) => {
      const user = await User.findOneAndUpdate(
        { _id: _id },
        {
          $set: {
            username: username,
            email: email
          }
        },
        { new: true });
      return user;
    },
    deleteUser: async (parent, { _id }, context) => {
      try {
        // if (context.user) {
        const user = await User.deleteOne({ _id: _id });

        return user;
        // }
        // throw new AuthenticationError('Not Logged In')
      } catch (error) {
        throw new AuthenticationError('No user was found');
      }
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addEvent: async (parent, { input }, context) => {
      if (context.user) {
        const event = await Event.create({ ...input, ['user_id']: context.user._id });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { events: event._id } }
        );

        return event;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    addMessage: async (parent, { _id, messageText }, context) => {
      if (context.user) {
  
        const message = await Message.create({
          messageText,
          messageAuthor: context.user.username
        });

        await User.findOneAndUpdate(
          // context.user._id wont work, fix in typeDefs
          { _id: _id },
          { $addToSet: { messages: message._id } }
        );

        return message;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeEvent: async (parent, { eventId }, context) => {
      if (context.user) {
        const event = await Event.findOneAndDelete({
          _id: eventId
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { events: event._id } }
        );

        return event;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeMessage: async (parent, { eventId, messageId }, context) => {
      if (context.user) {
        return Event.findOneAndUpdate(
          { _id: eventId },
          {
            $pull: {
              messages: {
                _id: messageId,
                messageAuthor: context.user.username,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
