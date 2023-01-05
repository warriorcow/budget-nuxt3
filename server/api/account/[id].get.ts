import CashAccountModel from "~/server/models/CashAccount.model";
import Account from "~/server/models/Account.model";

export default defineEventHandler(async (event) => {
  const id = event.context.params.id;
  const account = await CashAccountModel.findById(id)
  const actions = await Account.find({ id_account: id });

  let balance = account.cash;
  const currentBalance = balance + actions.map(item => {
    return item.type === 'spend' ? -item.cash : item.cash
  }).reduce((acc, cur) => acc + cur, 0)
  return { account, actions, currentBalance: `${currentBalance} ${account.currency}` };
})
