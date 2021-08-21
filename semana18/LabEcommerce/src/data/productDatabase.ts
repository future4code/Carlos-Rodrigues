import Product from "../classes/product";
import connection from "../connection";

export class ProductDatabase {

    private connection: any

    constructor() {
        this.connection = connection('labecom_products')
    }

    public async create (product: Product) {
        await this.connection
            .insert(product)
    }

    public async getAll (name: string, offset: number, orderBy?: string, orderType?: string) {
        const usersDB = await this.connection
        .where("name", "LIKE", `%${name}%`)
        .orderBy((orderBy as string) || "name", orderType as string)
        .offset(offset);
    }
}