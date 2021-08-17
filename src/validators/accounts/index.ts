import { IAccountInput } from '../../interfaces/account.input.interface'
import { IContext } from '../../interfaces/context.interface'
import { IAccountOutput } from '../../interfaces/account.output.interface'
import { EAccountViolations } from '../violantions.messages.enum'

export const accountValidator =
  (Context: IContext, operationsOutput: IAccountOutput[]) =>
  (operation: IAccountInput) => {
    // Creation validation
    const violations = []
    if (Context.initializedAccount) 
      violations.push(EAccountViolations.ALREADY_INITIALIZED)
    else {
      Context.account = operation.account
      Context.initializedAccount = true
    }
    const account = Object.assign({}, Context.account)
    operationsOutput.push({
      account,
      violations
    })
  }
