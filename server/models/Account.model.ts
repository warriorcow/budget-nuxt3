import { Schema, model } from "mongoose"

const schema: Schema = new Schema({
  id_account: {
    type: String
  },
  cash: {
    type: String
  },
  type: {
    type: String
  },
  name: {
    type: String,
    default: 'Empty'
  }
})

export default model('Account', schema);
