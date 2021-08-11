export default class Item {
    private id: number
    private description: string
    private price: number

    constructor (
        id: number,
        description: string,
        price: number
    ) {
        this.id = id
        this.description = description,
        this.price = price
    }
}