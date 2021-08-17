import { IContext } from '../../interfaces/context.interface'
import { ETransactionViolations } from '../violantions.messages.enum'

export const accountValidatorInit =
  (Context: IContext, violations: ETransactionViolations[]) => () => {
    // Account initialized validation
    if (!Context.initializedAccount)
      violations.push(ETransactionViolations.ACCOUNT_NOT_INITIALIZED)
    // Card status validation
    else if (!Context.account['active-card'])
      violations.push(ETransactionViolations.CARD_NOT_ACTIVE)
  }
