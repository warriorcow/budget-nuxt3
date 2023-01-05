import Account from "~/server/models/Account.model";

export default defineEventHandler(async (event) => {
  const id = event.context.params.id;
  try {
    await Account.findByIdAndDelete(id)
    return { success: true }
  } catch (e: any) {
    throw createError({
      message: e.message
    })
  }
})
