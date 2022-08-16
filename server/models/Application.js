import { Schema, model } from "mongoose";

const applicationSchema = new Schema(
  {

  }
)

const Application = model('Application', applicationSchema);

export default Application;