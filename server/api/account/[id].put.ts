import Account from "~/server/models/Account.model";
import { readBody } from "h3";

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const id = event.context.params.id;

  console.log(body)
  try {
    await Account.findByIdAndUpdate(id, body)
    return { success: true }
  } catch (e: any) {
    throw createError({
      message: e.message
    })
  }
})
