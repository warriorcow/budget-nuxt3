import CashAccountModel from "~/server/models/CashAccount.model";

export default defineEventHandler(async (event) => {
  const id = event.context.params.id;
  try {
    await CashAccountModel.findByIdAndDelete(id)
    return { success: true }
  } catch (e: any) {
    throw createError({
      message: e.message
    })
  }
})
