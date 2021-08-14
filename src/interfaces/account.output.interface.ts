interface IAccountProps {
  'active-card': boolean
  'available-limit': number
}
export interface IAccountOutput {
  account: IAccountProps
  violations: string[]
}
