import { Request, Response } from "express";
import { users } from "../data";
import { Account } from "../types";

export const createAccount = (
    req: Request,
    res: Response
) => {
    let errorCode = 400
    try {
        const {name, CPF, birthDate} = req.body

        const [day, month, year] = birthDate.split("/")
        const birthDateConverted: Date = new Date(`${year}-${month}-${day}`)
        
        const ageTimeStamp: number = Date.now() - birthDateConverted.getTime()
        const ageInYears: number = ageTimeStamp / 1000 / 60 / 60 / 24 / 365

        if (ageInYears < 18) {
            errorCode = 406
            throw new Error ("User must be older than 18 years.")
        } else if (!name || CPF.length < 11 || !birthDate) {
            errorCode = 422
            throw new Error('Please check the fields')
        } const newUser: Account = {
            name,
            CPF,
            birthDate: birthDateConverted,
            balance: 0,
            statement: []
        }
        users.push(newUser)
        res.status(201).send({message: "User created successfully."})
    } catch (error) {
        res.status(errorCode).send({message: error.message})
    }
}