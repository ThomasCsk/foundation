const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Query{
    me: User
    users: [User]
    applications(firstName: String, lastName: String): [Application]
    application(_id: ID!): Application
  }

  type Mutation{
    login(email: String!, password: String!): Auth
    addUser(firstName: String!, lastName: String!, username: String!, email: String!, password: String!, secret: String! ): Auth
    addApplication(
      submittedDate: String
      firstName: String!
      middleName: String
      lastName: String!
      age: String
      birthday: String
      grade: String
      school: String
      mothersName: String
      fathersName: String
      brothersName: String
      sistersName: String
      address: String
      phoneNumber: String
      guardianPhone: String
    ): Application
    editApplication(
      _id: ID!
      createdAt: String
      submittedDate: String
      firstName: String
      middleName: String
      lastName: String
      age: String
      birthday: String
      grade: String
      school: String
      mothersName: String
      fathersName: String
      brothersName: String
      sistersName: String
      address: String
      phoneNumber: String
      guardianPhone: String
    ): Application
    deleteUser(_id: ID!): User
    deleteApplication(_id: ID!): Application
  }

  type User{
    _id: ID
    firstName: String
    lastName: String
    username: String
    email: String
  }

  type Application{
    _id: ID
    createdAt: String
    submittedDate: String
    firstName: String
    middleName: String
    lastName: String
    age: String
    birthday: String
    grade: String
    school: String
    mothersName: String
    fathersName: String
    brothersName: String
    sistersName: String
    address: String
    phoneNumber: String
    guardianPhone: String
  }

  type Auth{
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;