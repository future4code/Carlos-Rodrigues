import { Request, Response } from "express";
import insertUser from "../data/insertUser";


export default async function createUser (
    req: Request,
    res: Response
) {
    try {
        const {name, nickname, email} = req.body
        if ( !name || !nickname || !email) {
            res.status(400).send("Preencha todos os campos")
            console.log("erro if")
        }

        const id: string = Date.now() + Math.random().toString()
        
        await insertUser(id, name, nickname, email)
        res.status(200).send("Usuário criado.")

    } catch (error) {
        res.status(400).send ({
            message: error.message || error.sqlMessage
        })
        console.log("erro")
    }
}