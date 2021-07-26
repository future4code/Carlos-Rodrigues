import { Request, Response } from "express";
import selectUser from "../data/selectUser";

export default async function getUserById (
    req: Request,
    res: Response
) {
    let errorCode = 400
    try {
        const id = req.params.id
        const user =  await selectUser(id)

        if (!user) {
            errorCode = 404
            throw new Error
        } 
        res.status(200).send({
            id,
            nickname: user.nickname
        })
    } catch (error) {
        res.status(errorCode).send({
            message: error.message || error.sqlMessage
        })
    }
}