export enum EAccountViolations {
    ALREADY_INITIALIZED = 'account-already-initialized'
}

export enum ETransactionViolations {
    ACCOUNT_NOT_INITIALIZED = 'account-not-initialized',
    CARD_NOT_ACTIVE = 'card-not-active',
    INSUFFICIENT_LIMIT = 'insufficient-limit',
    HIGH_FREQUENCY_SMALL_INTERVAL = 'high-frequency-small-interval',
    DOUBLED_TRANSACTION = 'doubled-transaction'
}