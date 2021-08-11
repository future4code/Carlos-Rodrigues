import { Request, Response } from "express";
import { User } from "../classes/user";
import { UserDatabase } from "../data/userDatabase";

export default async function createUser(
    req: Request,
    res: Response
): Promise<void> {
    let errorCode = 400
    try {
        const id = Math.floor(Date.now() + Math.random())
        const {name, email, age} = req.body
        if (!name || !email || !age) {
            errorCode = 400
            throw new Error("Preencha todos os campos.")
        }

        const user = new User(id, name, email, age)
        const database = new UserDatabase()

        await database.create(user)

        res.status(201).send("Usuário criado.")
    } catch (error) {
        res.status(errorCode).send({message: error.message})
    }
}