import { instanceOfAccount } from './helpers/instanceOfAccount'
import { Logger } from './helpers/logger'
import { IAccountInput } from './interfaces/account.input.interface'
import { IAccount } from './interfaces/account.interface'
import { IAccountOutput } from './interfaces/account.output.interface'
import { ITransactionInput } from './interfaces/transaction.input.interface'
import { accountValidator as accountValidatorFactory } from './validators/accountValidator'
import { transactionValidator as transactionValidatorFactory } from './validators/transactionValidator'

export const authorizer = (
  operations: (IAccountInput | ITransactionInput)[]
): void => {
  const Account: IAccount = {
    account: {},
    initialized: false,
  }
  const operationsOutput: IAccountOutput[] = []
  const transactionHistory: ITransactionInput[] = []
  const accountValidator = accountValidatorFactory(
    Account,
    operationsOutput
  )
  const transactionValidator = transactionValidatorFactory(
    Account,
    operationsOutput,
    transactionHistory
  )
  for (const operation of operations) {
    if (instanceOfAccount(operation)) accountValidator(operation)
    else transactionValidator(operation)
  }
  Logger(operationsOutput)
}
