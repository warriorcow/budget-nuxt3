import { Schema, model } from "mongoose"

const schema: Schema = new Schema({
  id_account: {
    type: String,
    required: true
  },
  cash: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})

export default model('Account', schema);
