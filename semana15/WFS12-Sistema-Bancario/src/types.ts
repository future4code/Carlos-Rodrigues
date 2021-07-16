export type User = {
    name: string
    CPF: number
    birthday: string
    balance: number
    movement: Transactions | string
}

export type Transactions = {
    value: number
    description: string
    date: string
}