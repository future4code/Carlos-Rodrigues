import { Request, Response } from "express";
import insertStudent from "../data/insertStudent";
import { Student } from "../types/student";

export default async function createStudent (
    req: Request,
    res: Response
) {
    let errorCode = 400
    try {
        const id = Number(Date.now() + Math.random())
        const {name, email, birth_date, class_id, hobbies}: Student = req.body

        if (!name || !email || !birth_date || !class_id || !hobbies) {
            errorCode = 422
            throw new Error("Preencha os campos obrigatórios.")
        }

        await insertStudent(id, name, email, birth_date, class_id, hobbies)

        res.status(201).send("Aluno adicionado.")
    } catch (error) {
        res.status(errorCode).send({ message: error.message}) 
    }
}


