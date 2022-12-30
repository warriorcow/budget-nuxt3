import { Nitro } from "nitropack";
import mongoose from "mongoose";


export default async (_nitroApp: Nitro) => {
  const config = useRuntimeConfig();
  console.log("Nitro Plugin Accessing!")

  try {
    await mongoose.connect(config.mongodbUri);
    console.log('Connected MongoDB!')
  } catch (e) {
    console.log(e + 'хуй')
  }
}
