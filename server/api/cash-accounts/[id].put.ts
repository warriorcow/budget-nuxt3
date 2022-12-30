import CashAccountModel from "~/server/models/CashAccount.model";
import {readBody} from "h3";

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const id = event.context.params.id;
  try {
      await CashAccountModel.findByIdAndUpdate(id, body)
      return { success: true }
  } catch (e: any) {
    throw createError({
      message: e.message
    })
  }
})
