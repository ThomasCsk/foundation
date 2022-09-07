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

export const QUERY_USERS = gql`
  query SearchUsers {
    users {
      _id
      firstName
      lastName
      username
      email
    }
  }
`

