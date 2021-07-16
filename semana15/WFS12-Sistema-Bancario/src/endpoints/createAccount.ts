import { Request, Response } from "express";
import { users } from "../data";
import { User } from "../types";

export const createAccount = (
    req: Request,
    res: Response
) => {
    let errorCode = 400
    try {
        const {name, CPF, birthday} = req.body
        console.log("cpf", CPF.toString().length)
        if (!name || CPF.toString().length < 11 || !birthday) {
            errorCode = 422
            throw new Error('Please check the fields')
        } const newUser: User = {
            name,
            CPF,
            birthday,
            balance: 0,
            movement: ""
        }
        users.push(newUser)
        res.status(201).send({message: "User created successfully."})
    } catch (error) {
        res.status(errorCode).send({message: error.message})
    }
}