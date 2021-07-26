import { Request, Response } from "express";
import alterUser from "../data/alterUser";

export default async function editUser(
    req: Request,
    res: Response    
) {
    const id = req.params.id
    const {name, nickname, email} = req.body
    try {
        if ( name === '' || nickname === '' || email === '' ) {
            res.status(400).send("Todos os campos selecionados devem ser preenchidos.")
            return
        } else if (!name && !nickname && !email) {
            res.status(400).send({
                message: "Selecione um campo para ser alterado."
            })
        }
    
        await alterUser(id, name, nickname, email)
        res.status(200).send("Dados atualizados.")
    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}