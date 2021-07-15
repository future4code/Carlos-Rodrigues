import { Request, Response } from "express";
import { users } from "../data";
import { USER_ROLES } from "../types";

export const getAllUsers = (
    req: Request,
    res: Response
) => {
    try {
        let type = req.query.type as string
        if (type) {
            type = type.toUpperCase()

            if (type in USER_ROLES) {
                const result = users.filter(user => user.type === type)
                return res.status(200).send(result)
            }

            throw new Error("Invalid type")
        }
        res.status(200).send(users)
    } catch (err) {
        res.status(400).send(err.message)
    }

}