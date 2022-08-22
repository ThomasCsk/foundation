import { gql } from "apollo-server-express";

const typeDefs = gql`

  type Query{
    me: User
    users: [User]
  }

  type Mutation{

  }

  type User{

  }

  type Application{

  }

  type Auth{
    token: ID!
    user: User
  }
`