import { IAccountOutput } from '../interfaces/account.output.interface'
import { ITransactionInput } from '../interfaces/transaction.input.interface'
import { IAccount } from '../interfaces/account.interface'
import { ETransactionViolations } from './violantions.enum'

export const transactionValidator =
  (
    Account: IAccount,
    operationsOutput: IAccountOutput[],
    transactionHistory: ITransactionInput[]
  ) =>
  (operation: ITransactionInput) => {
    const violations = []
    if (!Account.initialized)
      violations.push(ETransactionViolations.ACCOUNT_NOT_INITIALIZED)
    else if (!Account.account['active-card'])
      violations.push(ETransactionViolations.CARD_NOT_ACTIVE)
    else {
      transactionHistory.push(operation)
    }
    operationsOutput.push({ account: Account.account, violations })
  }
