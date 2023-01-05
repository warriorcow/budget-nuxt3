import { Schema, model } from "mongoose"

const schema: Schema = new Schema({
  cash: {
    type: Number
  },
  name: {
    type: String
  },
  currency: {
    type: String
  },
  id: {
    type: String
  }
})

export default model('CashAccount', schema);
