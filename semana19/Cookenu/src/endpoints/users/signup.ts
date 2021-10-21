import { Request, Response } from "express";
import { UserDatabase } from "../../data/UserDatabase";
import { Authenticator } from "../../services/Authenticator";
import { HashManager } from "../../services/HashManager";
import { IdGenerator } from "../../services/IdGenerator";
import { User } from "../../types/User";

export async function signup(req: Request, res: Response): Promise<void> {
  try {
    const { name, email, password, role } = req.body;
    const idGenerator = new IdGenerator();
    const id = idGenerator.generateId();

    const userDatabase = new UserDatabase();
    const user = await userDatabase.findUserByEmail(email);

    const hashManager = new HashManager();
    const hashPassword = await hashManager.hash(password);

    if (!name || !email || !password || !role) {
      res.statusCode = 422;
      throw new Error("Preencha todos os campos corretamente.'");
    }
    if (user) {
      throw new Error("Esse e-mail já está cadastrado.");
    }

    const newUser = new User(id, name, email, hashPassword, role);
    await userDatabase.createUser(newUser);

    const authenticator = new Authenticator();
    const token = authenticator.generateToken({ id, role });

    res.status(201).send({ message: "Usuário criado com sucesso!", token });
  } catch (error) {
    res.send({ message: error.message });
  }
}
