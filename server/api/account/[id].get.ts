import CashAccountModel from "~/server/models/CashAccount.model";
import Account from "~/server/models/Account.model";

export default defineEventHandler(async (event) => {
  const id = event.context.params.id;
  const account = await CashAccountModel.findById(id)
  const actions = await Account.find({ id_account: id });
  return { account, actions };
})
