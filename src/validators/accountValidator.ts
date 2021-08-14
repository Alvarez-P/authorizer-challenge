import { IAccountInput } from '../interfaces/account.input.interface'
import { IAccount } from '../interfaces/account.interface'
import { IAccountOutput } from '../interfaces/account.output.interface'
import { EAccountViolations } from './violantions.enum'

export const accountValidator =
  (Account: IAccount, operationsOutput: IAccountOutput[]) =>
  (operation: IAccountInput) => {
    // Creation validation
    operationsOutput.push({
      ...operation,
      violations: Account.initialized
        ? [EAccountViolations.ALREADY_INITIALIZED]
        : [],
    })
    if (!Account.initialized) {
      Account.account = operation.account
      Account.initialized = true
    }
  }
