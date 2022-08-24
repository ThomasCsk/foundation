const { User, Application } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
require('dotenv').config()

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');
        return userData;
      };
      throw new AuthenticationError('Not logged in');
    },
    users: async () => {
      const userData = await User.find().select('-__v -password -secret');
      return userData;
    },
    applications: async (parent, {firstName, lastName}, context) => {
      if(context.user){
        const params = [firstName?{firstName}:{}, lastName?{lastName}:{}]
        const applicationData = await Application.find(params);
        return applicationData;
      };
      throw new AuthenticationError('Not logged in');
    },
    application: async (parent, {_id}, context) => {
      if(context.user){
        const applicationData = await Application.findOne({_id});
        return applicationData;
      }
      throw new AuthenticationError('Not logged in');
    }
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    addUser: async (parent, args) => {
      if(args.secret === process.env.SECRET_NEW_USER){
        const user = await User.create(args);
        const token = signToken(user);

        return { token, user };
      }
      throw new AuthenticationError('Incorrect secret');
    },
    addApplication: async (parent, args, context) => {
      if(context.user){
        const applicationData = await Application.find(args.firstName, args.lastName);
        if(applicationData){
          throw new Error("You may have already added this student")
        }
        const application = await Application.create(args);
        return application;
      }
      throw new AuthenticationError('Not logged in')
    },
    // editApplication: async (parent, args, context) => {
    //   if(context.user){

    //   }
    //   throw new AuthenticationError('Not logged in')
    // },
    deleteUser: async (parent, args, context) => {
      if(context.user){
        const deletedUser = await User.findOneAndDelete(_id)
      }
      throw new AuthenticationError('Not logged in')
    },
    deleteApplication: async (parent, {_id}, context) => {
      if(context.user){
        const deletedApp = await Application.findOneAndDelete(_id);
        return deletedApp;
      }
      throw new AuthenticationError('Not logged in')
    }
  }
}

module.exports = resolvers;