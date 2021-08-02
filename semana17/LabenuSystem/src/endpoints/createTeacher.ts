import { Request, Response } from "express";
import { connection } from "../connection";
import insertTeacher from "../data/insertTeacher";
import { EXPERTISE } from "../types/teacher";

export default async function createTeacher(
    req: Request,
    res: Response
) {
    let errorCode = 400
    try {
        const id = Number(Math.floor(Date.now() + Math.random()))
        const {name, email, birth_date, class_id, expertise} = req.body

        if (!name || !email || !birth_date || !class_id || !expertise) {
            errorCode = 422
            throw new Error("Preencha os campos obrigatórios.")
        }

        if (expertise !== EXPERTISE.BACK && expertise !== EXPERTISE.FRONT) {
            errorCode = 422
            throw new Error("O docente deve possuir uma especialidade 'frontend' ou 'backend'.")
        }

        await insertTeacher(id, name, email, birth_date, class_id, expertise)
        
        res.status(201).send("Docente cadastrado com sucesso.")
    } catch (error) {
       res.status(errorCode).send({message: error.message || error.sqlMessage})
    }
}