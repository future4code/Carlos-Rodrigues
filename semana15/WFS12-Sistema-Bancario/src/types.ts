export type Account = {
    name: string
    CPF: string
    birthDate: Date
    balance: number
    statement: Transactions[]
}

export type Transactions = {
    value: number
    description: string
    date: Date
}