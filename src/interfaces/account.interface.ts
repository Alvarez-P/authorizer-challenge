interface IAccountProps {
  'active-card'?: boolean
  'available-limit'?: number
}
export interface IAccount {
  account: IAccountProps
  initialized: boolean
}
