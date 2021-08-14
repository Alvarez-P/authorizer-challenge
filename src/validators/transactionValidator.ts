import { IAccountOutput } from '../interfaces/account.output.interface'
import { ITransactionInput } from '../interfaces/transaction.input.interface'
import { IAccountInput } from '../interfaces/account.input.interface'

export const transactionValidator =
  (
    account: IAccountInput[],
    operationsOutput: IAccountOutput[],
    transactionHistory: ITransactionInput[]
  ) =>
  (operation: ITransactionInput) => {
    console.log('ACCOUNT', account)
    transactionHistory.push(operation)
  }
