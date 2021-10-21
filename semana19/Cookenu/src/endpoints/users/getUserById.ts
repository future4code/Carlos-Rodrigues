import { Request, Response } from "express";
import { UserDatabase } from "../../data/UserDatabase";
import { Authenticator } from "../../services/Authenticator";

export async function getUserById(req: Request, res: Response) {
  try {
    const token: string = req.headers.authorization!;
    const { id } = req.params;

    const authenticator = new Authenticator();
    const tokenData = authenticator.getTokenData(token);

    const userDatabase = new UserDatabase();
    const user = await userDatabase.findUserById(id);

    if (!user) {
      throw new Error("Usuário não encontrado.");
    }

    res.send({
      name: user.getName(),
      email: user.getEmail(),
      role: user.getRole(),
    });
  } catch (error) {
    if (res.statusCode === 200) {
      res.status(500).send("Internal error!");
    }
    res.send({ message: error.message });
  }
}
