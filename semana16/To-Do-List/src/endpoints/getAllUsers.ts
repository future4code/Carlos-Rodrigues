import { Request, Response } from "express";
import allUsers from "../data/allUsers";

export default async function getAllUsers (
    req: Request,
    res: Response
) {
    let errorCode = 400
    try {
        const user = await allUsers()
        res.status(200).send(user)
    } catch (error) {
        res.status(errorCode).send({
            message: error.message || error.sqlMessage
        })
    }
}