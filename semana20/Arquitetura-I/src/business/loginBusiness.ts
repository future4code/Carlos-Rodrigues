import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";

export const loginBusiness = async ({ email, password }: any) => {

  if (!email || !password) {
    throw new Error("Preencha todos os campos corretamente");
  }

  const userDatabase = new UserDatabase();
  const user = await userDatabase.verifyUser(email);

  if (!user) {
    throw new Error("Esse e-mail não está cadastrado.");
  }

  const hashManager = new HashManager()
  const accessToken = hashManager.compare(password, user.getPassword())

  if (!accessToken) {
      throw new Error("e-mail ou senha incorretos.")
  }

  const auth = new Authenticator()
  const token = auth.generateToken({
      id: user.getId(),
      role: user.getRole()
  })

  return token
};
