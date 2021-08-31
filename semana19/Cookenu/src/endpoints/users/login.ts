import { Request, Response } from "express";
import { UserDatabase } from "../../data/UserDatabase";
import { Authenticator } from "../../services/Authenticator";
import { HashManager } from "../../services/HashManager";

export async function login(req: Request, res: Response): Promise<void> {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.statusCode = 422;
      throw new Error("Preencha todos os campos corretamente.'");
    }

    const userDatabase = new UserDatabase();
    const user = await userDatabase.findUserByEmail(email);

    if (!user) {
      throw new Error("Esse e-mail não está cadastrado.");
    }

    const hashManager = new HashManager();
    const validation = await hashManager.compare(password, user.getPassword());

    if (!validation) {
      res.statusCode = 401;
      throw new Error("e-mail ou senha incorretos.");
    }

    const authenticator = new Authenticator();
    const token = authenticator.generateToken({
      id: user.getId(),
      role: user.getRole(),
    });

    res.status(201).send({ message: "Usuário logado com sucesso!", token });
  } catch (error) {
    res.send({ message: error.message });
  }
}
