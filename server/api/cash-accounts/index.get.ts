import CashAccountModel from "~/server/models/CashAccount.model";

export default defineEventHandler(async (): Promise<any> => {
  const cashAccounts = await CashAccountModel.find();

  return [...cashAccounts]
})
