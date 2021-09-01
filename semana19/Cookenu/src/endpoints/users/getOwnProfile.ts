import { Request, Response } from "express";
import { UserDatabase } from "../../data/UserDatabase";
import { Authenticator } from "../../services/Authenticator";

export async function getOwnProfile(req: Request, res: Response) {
  try {
    const token: string = req.headers.authorization!;
    const authenticator = new Authenticator();
    const tokenData = authenticator.getTokenData(token);

    const userDatabase = new UserDatabase();
    const user = await userDatabase.findUserById(tokenData?.id);

    if (!user) {
      throw new Error("Usuário não encontrado.");
    }

    res
      .send({
        id: user.getId(),
        name: user.getName(),
        email: user.getEmail(),
        role: user.getRole(),
      })
      .status(200);
  } catch (error) {
    if (res.statusCode === 200) {
      res.status(500).send("Internal error!");
    }
    res.send({ message: error.message });
  }
}
