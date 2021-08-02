import { Request, Response } from "express";
import insertTask from "../data/insertTask";

export default async function createTask(
    req: Request,
    res: Response
) {
    try {
        const {title, description, limitDate, creatorUserId} = req.body
        const id: string = Date.now() + Math.random().toString()

        if ( !title || !description || !limitDate || !creatorUserId ) {
            res.status(400).send("Preencha todos os campos")
        }

        await insertTask (id, title, description, limitDate)
    } catch (error) {

    }
}