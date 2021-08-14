import { IAccountInput } from '../interfaces/account.input.interface'
import { IAccountOutput } from '../interfaces/account.output.interface'
import { EAccountViolations } from './violantions.enum'

export const accountValidator =
  (account: IAccountInput[], operationsOutput: IAccountOutput[]) =>
  (operation: IAccountInput) => {
    operationsOutput.push({
      ...operation,
      violations: account.length
        ? [EAccountViolations.ALREADY_INITIALIZED]
        : [],
    })
    if (!account.length) account.push(operation)
  }
