interface IContextProps {
  'active-card'?: boolean
  'available-limit'?: number
}
export interface IContext {
  account: IContextProps
  initializedAccount: boolean
  successTransactions: number
  minimumLimitReached: boolean
  frequencyErrorRevised: boolean
}
