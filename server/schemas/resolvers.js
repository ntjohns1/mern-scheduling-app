const { AuthenticationError } = require('apollo-server-express');
const { User, Event, Message, Email } = require('../models');
const { signToken } = require('../utils/auth');
const mongoose = require('mongoose')
const mailer = require('../utils/mailer');


const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('events').populate('messages').populate('address');
    },
    user: async (parent, { _id }) => {
      return User.findOne({ _id }).populate('events').populate('messages').populate('address');
    },
    events: async () => {
      return Event.find().sort({ date: -1 });
    },
    eventsByDate: async (parent, { dayRef },) => {
      const params = dayRef ? { dayRef } : {};
      return Event.find(params);
    },
    event: async (parent, { _id }) => {
      return Event.findOne({ _id: _id });
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
    updateUser: async (parent, { _id, username, email, autoNotify }) => {
      const user = await User.findOneAndUpdate(
        { _id: _id },
        {
          $set: {
            username: username,
            email: email,
            autoNotify: autoNotify
          }
        },
        { new: true });
      return user;
    },
    deleteUser: async (parent, { _id }, context) => {
      try {
        if (context.user) {
        const user = await User.deleteOne({ _id: _id });

        return user;
        }
        throw new AuthenticationError('Not Logged In')
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
      if (context.user.isTeacher) {
        const event = await Event.create({ ...input });
        await User.findOneAndUpdate(
          { _id: event.studentId },
          { $addToSet: { events: event._id } }
        );
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { events: event._id } }
        );

        return event;
      }
      throw new AuthenticationError('Invalid Credentials');
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
    sendEmail: async (parent, { input }, context) => {
      if (context.user.isTeacher) {
  
        const mail = await Email.create({ ...input });
  
        const email = input.email
        const senderName = input.senderName
        const toEmail = input.toEmail
        const subject = input.subject
        const text = input.text
        
        await mailer(email, senderName, toEmail, subject, text).then(() => {
          console.log(`Sent the message "${text}" from <${senderName}> ${email}.`);
        }).catch((error) => {
          console.log(`Failed to send the message "${text}" from <${senderName}> ${email} with the error ${error && error.message}`);
        });

        return mail;
      }
      throw new AuthenticationError('Invalid Credentials');
    },
    deleteEvent: async (parent, { _id, userId }, context) => {
      if (context.user.isTeacher) {
        // userId = mongoose.Types.ObjectId('618d324f6de85e6d127da089');
        
        const event = await Event.findOneAndDelete({
          _id: _id
        });

        await User.findOneAndUpdate(
          { _id: userId },
          { $pull: { events: _id } }
        );

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { events: _id } }
        );

        return event;
        }
      throw new AuthenticationError('You need to be logged in!');
    },
    updateEvent: async (parent, args) => {
      if (context.user.isTeacher) {
      const { _id } = args.input;
       
      const event = await Event.findOneAndUpdate(
        { _id: _id },
        { $set: {...args.input}},
        { new: true });
      return event;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeMessage: async (parent, { userId, messageId }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: userId },
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
