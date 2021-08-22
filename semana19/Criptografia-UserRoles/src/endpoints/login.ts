import { Request, Response } from "express";
import connection from "../connection";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";

export default async function login(
    req: Request,
    res: Response
) {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            throw new Error("Campo 'e-mail' e 'senha' devem ser preenchidos.")
        }

        const [user] = await connection('to_do_list_users')
            .where({ email })

        if (!user) {
            res.statusCode = 400
            throw new Error("E-mail não cadastrado.")
        }
        const hm = new HashManager()
        const hashCompare = await hm.compare(password, user.password)

        if (!hashCompare) {
            throw new Error("Senha incorreta.")
        }

        const auth = new Authenticator()
        const token = auth.generateToken({ id: user.id, role: user.role })

        res.status(200).send({ token })
    } catch (error) {
        res.send({ message: error.message })
    }
}