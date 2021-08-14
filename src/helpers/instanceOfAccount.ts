import { IAccountInput } from "../interfaces/account.input.interface"

export const instanceOfAccount = (data: any): data is IAccountInput => {
    return 'account' in data
}