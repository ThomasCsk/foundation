import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
        username
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $username: String!, $email: String!, $password: String!, $secret: String!) {
    addUser(firstName: $firstName, lastName: $lastName, username: $username, email: $email, password: $password, secret: $secret) {
      token
      user {
        _id
        firstName
        lastName
        username
        email
      }
    }
  }
`;

export const ADD_APPLICATION = gql`
  mutation AddApplication($submittedDate: String, $firstName: String!, $middleName: String, $lastName: String!, $age: String, $birthday: String, $grade: String, $school: String, $mothersName: String, $fathersName: String, $brothersName: String, $sistersName: String, $address: String, $phoneNumber: String, $guardianPhone: String) {
    addApplication(submittedDate: $submittedDate, firstName: $firstName, middleName: $middleName, lastName: $lastName, age: $age, birthday: $birthday, grade: $grade, school: $school, mothersName: $mothersName, fathersName: $fathersName, brothersName: $brothersName, sistersName: $sistersName, address: $address, phoneNumber: $phoneNumber, guardianPhone: $guardianPhone) {
      _id
      createdAt
      submittedDate
      firstName
      middleName
      lastName
      birthday
      age
      grade
      school
      mothersName
      fathersName
      brothersName
      sistersName
      address
      guardianPhone
      phoneNumber
    }
  }
`;

export const EDIT_APPLICATION = gql`
  mutation EditApplication($id: ID!, $createdAt: String, $submittedDate: String, $firstName: String, $middleName: String, $lastName: String, $age: String, $birthday: String, $grade: String, $school: String, $mothersName: String, $fathersName: String, $brothersName: String, $sistersName: String, $address: String, $phoneNumber: String, $guardianPhone: String) {
    editApplication(_id: $id, createdAt: $createdAt, submittedDate: $submittedDate, firstName: $firstName, middleName: $middleName, lastName: $lastName, age: $age, birthday: $birthday, grade: $grade, school: $school, mothersName: $mothersName, fathersName: $fathersName, brothersName: $brothersName, sistersName: $sistersName, address: $address, phoneNumber: $phoneNumber, guardianPhone: $guardianPhone) {
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

export const DELETE_APPLICATION = gql`
  mutation deleteApplication($id: ID!) {
    deleteApplication(_id: $id) {
      _id
      createdAt
      submittedDate
      firstName
      middleName
      lastName
      birthday
      grade
      school
    }
  }
`;