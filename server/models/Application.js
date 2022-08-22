import { Schema, model } from "mongoose";

const dateFormat = (timestamp) => {
  const day = new Date(timestamp)
  return (day.getMonth()+1) + 
          '/' +
          day.getDate() + 
          '/' + 
          day.getFullYear() +
          'at' +
          day.getHours() + 
          ':' + 
          day.getMinutes();
}

const applicationSchema = new Schema(
  {
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    submittedDate: {
      type: String
    },
    firstName: {
      type: String,
      required: true
    },
    middleName: {
      type: String
    },
    lastName: {
      type: String,
      required: true
    },
    age: {
      type: String
    },
    birthday: {
      type: String
    },
    grade: {
      type: String
    },
    school: {
      type: String,
      trim: true
    },
    mothersName: {
      type: String,
      trim: true
    },
    fathersName: {
      type: String,
      trim: true
    },
    brothersName: {
      type: String,
      trim: true
    },
    sistersName: {
      type: String,
      trim: true
    },    
    address: {
      type: String
    },
    phoneNumber: {
      type: String
    },
    guardianPhone: {
      type: String
    },
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const Application = model('Application', applicationSchema);

export default Application;