import { Request, Response } from "express";
import { users } from "../data";
import { User } from "../types";

export const getUserByName = (
    req: Request,
    res: Response
) => {
    const userName: string = req.params.name
    const userByName: User[] = users.filter((user) => user.name.toLowerCase() === userName.toLowerCase())

    if (userByName.length === 0) {
        res.status(404).send({message: "User not found."})
    } else {
        res.status(200).send(userByName)
    }
}