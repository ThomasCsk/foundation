import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt';

import applicationSchema from './Application'

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!']
    },
    password: {
      type: String,
      required: true,
      minlength: 5
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    admin: {
      // 0 if student, 1 if staff/admin
      type: Boolean,
      required: true
    },
    applications: [applicationSchema]
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
)

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema)

export default User;