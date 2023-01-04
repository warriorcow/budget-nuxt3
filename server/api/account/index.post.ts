import Account from "~/server/models/Account.model";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  try {
    await Account.create(body)
    return { success: true }
  } catch (e: any) {
    throw createError({
      message: e.message
    })
  }
})
