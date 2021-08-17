import { instanceOfAccount } from './helpers/instanceOfAccount'
import { Logger } from './helpers/logger'
import { IAccountInput } from './interfaces/account.input.interface'
import { IContext } from './interfaces/context.interface'
import { IAccountOutput } from './interfaces/account.output.interface'
import { ITransactionInput } from './interfaces/transaction.input.interface'
import { accountValidator as accountValidatorFactory } from './validators/accounts/index'
import { transactionValidator as transactionValidatorFactory } from './validators/transactions/index'

export const authorizer = (
  operations: (IAccountInput | ITransactionInput)[]
): void => {
  const Context: IContext = {
    account: {},
    initializedAccount: false,
    successTransactions: 0,
    minimumLimitReached: false,
    frequencyErrorRevised: false,
  }
  const operationsOutput: IAccountOutput[] = []
  const transactionHistory: ITransactionInput[] = []
  const accountValidator = accountValidatorFactory(Context, operationsOutput)
  const transactionValidator = transactionValidatorFactory(
    Context,
    operationsOutput,
    transactionHistory
  )
  for (const operation of operations) {
    if (instanceOfAccount(operation)) accountValidator(operation)
    else transactionValidator(operation)
  }
  Logger(operationsOutput)
}
