import { Request, Response } from "express";
import { connection } from "../data/connection";
import { getAddress } from "../services/getAddress";
import { userAddress } from "../types";

export default async function addAddress (
    req: Request,
    res: Response
) {
    try {
        const {cep, numero} = req.body
        const address = await getAddress(cep)
        const id: string = Date.now().toString()
        if (!cep || !numero) {
            res.statusCode = 422
            throw "'CEP' e 'número' são campos obrigatórios"
        } if (!address?.logradouro) {
            res.statusCode = 404
            throw "CEP inválido"
        }
        const {logradouro, bairro, localidade, uf} = address
        const newAddress: userAddress = {id, cep, numero, logradouro, bairro, localidade, uf}

        await connection('aula51_users_address').insert(newAddress)

        res.status(201).send("Endereço adicionado!")
    } catch (error) {
        if (typeof error === "string") {

            res.send(error)
         } else {
            
            console.log(error.sqlMessage || error.message);
            res.status(500).send("Ops! Um erro inesperado ocorreu =/")
         }
   
    }
}