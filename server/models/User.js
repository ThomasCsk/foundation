import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt';

const userSchema = new Schema(
  {

  }
)

const User = model('User', userSchema)

export default User;