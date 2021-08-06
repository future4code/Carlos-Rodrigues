import Product from "./product";

export default class Trip extends Product {

    constructor(
        id: number,
        product: string,
        description: string,
        price: number
    ) {
        super(id, product, description, price)
    }
}