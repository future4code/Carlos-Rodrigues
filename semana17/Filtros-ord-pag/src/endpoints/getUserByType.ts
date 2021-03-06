import { Request, Response } from "express";
import { connection } from "../data/connection";
import selectType from "../data/selectType";

export default async function getUserByType(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const type = req.params.type
        const name = req.query.name || "%"
        const users = await selectType(type, name)
        res.status(200).send(users)
    } catch (error) {
        res.status(500).send({
            message: error.message || error.sqlMessage
        })
    }
}