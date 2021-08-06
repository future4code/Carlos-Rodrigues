export default class Product {
    private id: number
    private product: string
    private description: string
    private price: number

    constructor (
        id: number,
        product: string,
        description: string,
        price: number
    ) {
        this.id = id
        this.product = product,
        this.description = description,
        this.price = price
    }
}