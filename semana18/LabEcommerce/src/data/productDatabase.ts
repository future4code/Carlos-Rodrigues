import connection from "../connection";

export class ProductDatabase {
    public async create (product: any) {
        await connection('labecom_products')
            .insert({})
    }

    public async getAll () {

    }
}