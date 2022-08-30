import { gql } from "@apollo/client";

export const QUERY_ME_BASIC = gql`
  query me {
    me {
      _id
      firstName
      lastName
      username
    }
  }
`;

export const QUERY_APPLICATIONS = gql`
  query Applications {
    applications {
      _id
      submittedDate
      firstName
      lastName
      age
      grade
      school
    }
  }
`;

export const QUERY_APPLICATION = gql`
  query Application($id: ID!) {
    application(_id: $id) {
      _id
      createdAt
      submittedDate
      firstName
      middleName
      lastName
      age
      birthday
      grade
      school
      mothersName
      fathersName
      brothersName
      sistersName
      address
      phoneNumber
      guardianPhone
    }
  }
`;

