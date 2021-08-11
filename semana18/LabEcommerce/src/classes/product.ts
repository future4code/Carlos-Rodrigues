import Item from "./item";

export default class Product extends Item {
    private product: string
    constructor(
        id: number,
        product: string,
        description: string,
        price: number
    ) {
        super(id, description, price)
        {
            this.product = product
        }
    }
}