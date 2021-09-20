import { Request, Response } from "express";
import { Class, CLASS_SHIFT } from "../types/class";
import insertClass from "../data/insertClass";

export default async function createClass(
    req: Request,
    res: Response
) {
    let errorCode = 400
    try {

        const {name, start_date, end_date, stage, shift}: Class = req.body

        if (!name || !start_date || !end_date || !shift) {
            errorCode = 422
            throw new Error("Preencha os campos obrigatórios.")
        }

        if ( shift !== CLASS_SHIFT.FULL && shift !== CLASS_SHIFT.NIGHT) {
            errorCode = 422
            throw new Error("A turma deve ter um turno integral ou noturno.")
        }

        if (shift === CLASS_SHIFT.NIGHT) {
            await insertClass(`${name}-na-night`, start_date, end_date, stage)
        } else if (shift === CLASS_SHIFT.FULL) {
            await insertClass(name, start_date, end_date, stage)
        } 

        res.status(201).send({message: "Turma criada!"})
    } catch (error) {
        res.status(errorCode).send({ message: error.message})
    }
}