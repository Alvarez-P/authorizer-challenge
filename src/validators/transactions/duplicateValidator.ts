
import { ITransactionInput, ITransactionProps } from '../../interfaces/transaction.input.interface'
import { ETransactionViolations } from '../violantions.messages.enum'

export const duplicateValidatorInit =
  (violations: ETransactionViolations[]) =>
  (transaction: ITransactionProps, operation: ITransactionInput) => {
    // Doubled transaction validation
    if (
      transaction.merchant === operation.transaction.merchant &&
      transaction.amount === operation.transaction.amount
    )
      violations.push(ETransactionViolations.DOUBLED_TRANSACTION)
  }
