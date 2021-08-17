import { IAccountOutput } from '../../interfaces/account.output.interface'
import { ITransactionInput } from '../../interfaces/transaction.input.interface'
import { IContext } from '../../interfaces/context.interface'
import { ETransactionViolations } from '../violantions.messages.enum'
import { inInterval } from '../../helpers/inInterval'
import { Constants } from '../validations.constants.enum'
import { accountValidatorInit } from './accountValidator'
import { stockValidatorInit } from './stockValidator'
import { execTransactionInit } from './execTransaction'
import { duplicateValidatorInit } from './duplicateValidator'
import { frequencyValidatorInit } from './frequencyValidator'

export const transactionValidator =
  (
    Context: IContext,
    operationsOutput: IAccountOutput[],
    transactionHistory: ITransactionInput[]
  ) =>
  (operation: ITransactionInput) => {
    // Setup
    const violations: ETransactionViolations[] = []
    const execTransaction = execTransactionInit(Context)
    const accountValidator = accountValidatorInit(Context, violations)
    const stockValidation = stockValidatorInit(Context, violations)
    const duplicateValidator = duplicateValidatorInit(violations)
    const frequencyValidator = frequencyValidatorInit(Context, violations)

    // Validations
    accountValidator()
    if (!violations.length) {
      stockValidation(operation.transaction.amount)

      if (Context.account['available-limit'] === Constants.MIN_AVAILABLE_LIMIT)
        Context.minimumLimitReached = true

      if (Context.minimumLimitReached) {
        for (const { transaction } of transactionHistory) {
          if (
            inInterval(
              operation.transaction.time,
              transaction.time,
              Constants.VALIDATION_INTERVAL_MINUTES
            )
          ) {
            frequencyValidator()
            duplicateValidator(transaction, operation)
          } else {
            Context.successTransactions = 0
            transactionHistory.length = 0
          }
        }
      }
      if (!violations.length) execTransaction(operation)
    }

    // Transaction registry
    operationsOutput.push({
      account: Context.initializedAccount
        ? Object.assign({}, Context.account)
        : {},
      violations,
    })
    transactionHistory.unshift(operation)
  }
