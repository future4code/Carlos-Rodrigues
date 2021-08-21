import { Request, Response } from "express";
import Product from "../classes/product";
import { ProductDatabase } from "../data/productDatabase";

export default async function createProduct(
    req: Request,
    res: Response
): Promise<void> {
    let errorCode = 400
    try {
        const id = Math.floor(Date.now() + Math.random())
        const {product, description, price} = req.body

        if (!product || !description || !price) {
            throw new Error("Preencha todos os campos.")
        }

        const productToAdd = new Product(id, product, description, price)
        const database = new ProductDatabase()

        await database.create(productToAdd)

        res.status(201).send("Produto adicionado!")
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}