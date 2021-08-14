import { instanceOfAccount } from './helpers/instanceOfAccount'
import { Logger } from './helpers/logger'
import { IAccountInput } from './interfaces/account.input.interface'
import { IAccountOutput } from './interfaces/account.output.interface'
import { ITransactionInput } from './interfaces/transaction.input.interface'
import { accountValidator as accountValidatorFactory } from './validators/accountValidator'
import { transactionValidator as transactionValidatorFactory } from './validators/transactionValidator'

export const authorizer = (
  operations: (IAccountInput | ITransactionInput)[]
): void => {
  let account: [IAccountInput] | [] = []
  const operationsOutput: IAccountOutput[] = []
  const transactionHistory: ITransactionInput[] = []
  const accountValidator = accountValidatorFactory(account, operationsOutput)
  const transactionValidator = transactionValidatorFactory(
    account,
    operationsOutput,
    transactionHistory
  )
  for (const operation of operations) {
    if (instanceOfAccount(operation)) accountValidator(operation)
    else transactionValidator(operation)
  }
  Logger(operationsOutput)
}
