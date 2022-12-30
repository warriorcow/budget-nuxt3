import CashAccountModel from "~/server/models/CashAccount.model";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  try {
    await CashAccountModel.create(body)
    return { success: true }
  } catch (e: any) {
    throw createError({
      message: e.message
    })
  }
})
