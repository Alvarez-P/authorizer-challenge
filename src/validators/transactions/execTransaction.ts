import { IContext } from "../../interfaces/context.interface"
import { ITransactionInput } from "../../interfaces/transaction.input.interface"

export const execTransactionInit =
  (Context: IContext) => (operation: ITransactionInput) => {
    if (Context.account['available-limit'])
      Context.account['available-limit'] -= operation.transaction.amount
    Context.successTransactions++
  }