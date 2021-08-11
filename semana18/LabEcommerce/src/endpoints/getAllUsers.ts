import { Request, Response } from "express";
import { UserDatabase } from "../data/userDatabase";

export default async function getAllUsers(
    req: Request,
    res: Response
) {
    try {
        const database = new UserDatabase()

        const user = await database.getAll()
        res.send(user);

    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}