interface ITransactionProps {
  merchant: string
  amount: number
  time: Date
}
export interface ITransactionInput {
  transaction: ITransactionProps
}
