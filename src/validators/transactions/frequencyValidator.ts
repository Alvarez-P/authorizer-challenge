import { IContext } from '../../interfaces/context.interface'
import { Constants } from '../validations.constants.enum'
import { ETransactionViolations } from '../violantions.messages.enum'

export const frequencyValidatorInit =
  (Context: IContext, violations: ETransactionViolations[]) =>
  () => {
    // High frequency small interval validation
    if (
      !Context.frequencyErrorRevised &&
      Context.successTransactions ===
        Constants.MAX_SUCCESS_TRANSACTIONS_IN_INTERVAL
    ) {
      Context.frequencyErrorRevised = true
      violations.push(ETransactionViolations.HIGH_FREQUENCY_SMALL_INTERVAL)
    }
  }
