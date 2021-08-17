import { IContext } from '../../interfaces/context.interface'
import { ETransactionViolations } from '../violantions.messages.enum'

export const stockValidatorInit =
  (Context: IContext, violations: ETransactionViolations[]) =>
  (amount: number) => {
    // Stock validation
    if (
      Context.account['available-limit'] &&
      Context.account['available-limit'] < amount
    )
      violations.push(ETransactionViolations.INSUFFICIENT_LIMIT)
  }
