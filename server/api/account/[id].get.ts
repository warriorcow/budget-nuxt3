import CashAccountModel from "~/server/models/CashAccount.model";
import Account from "~/server/models/Account.model";

export default defineEventHandler(async (event) => {
  const id = event.context.params.id;
  try {
    console.log(id)
    const account = await CashAccountModel.findById(id)
    const actions = await Account.find({ id_account: id });
    let { cash } = account;
    const currentBalance = cash + actions.map(item => {
      return item.type === 'spend' ? -item.cash : item.cash
    }).reduce((acc, cur) => acc + cur, 0)
    return { account, actions, currentBalance: `${currentBalance} ${account.currency}` };
  } catch (e: any) {
    throw createError({
      message: e.message
    })
  }
})
