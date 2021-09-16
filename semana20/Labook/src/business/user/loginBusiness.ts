import { selectUserByEmail } from "../../data/user/selectUserByEmail";
import { Authenticator } from "../../services/Authenticator";
import { HashManager } from "../../services/HashManager";

export const loginBusiness = async (email: string, password: string) => {
  const hashManager = new HashManager();
  const authenticator = new Authenticator();
  if (!email || !password) {
    let message = '"email" and "password" must be provided';
    throw new Error(message);
  }

  const user = await selectUserByEmail(email);

  if (!user) {
    throw new Error("Usuário não encontrado ou senha incorreta");
  }
  const passwordIsCorrect: boolean = await hashManager.compare(
    password,
    user.password
  );

  if (!passwordIsCorrect) {
    let message = "Invalid credentials";
    throw new Error(message);
  }

  const token: string = authenticator.generateToken({
    id: user.id,
  });
  return token;
};
