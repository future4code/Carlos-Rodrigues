import { User } from './../types';
import { Request, Response } from "express";
import { users } from '../data';

export const addUser = (
    req: Request,
    res: Response
) => {
    let errorCode: number = 400
    try {
        const {id, name, email, type, age} = req.body
        
        if (!id || !name || !email || !type || !age) {
            errorCode = 422
            throw new Error('Please check the fields')
        } else {
            const newUser: User = {
                id,
                name,
                email,
                type,
                age
            }

            users.push(newUser)
            res.status(201).send({message: "User created successfully"})
        }

    } catch (error) {
        res.status(errorCode).send({message: error.message})
    }
}