import { insertUser } from "../../data/user/insertUser";
import { Authenticator } from "../../services/Authenticator";
import { HashManager } from "../../services/HashManager";
import { IdGenerator } from "../../services/IdGenerator";

export const signupBusiness = async ({ name, email, password }: any) => {
  const hashManager = new HashManager();
  const idGenerator = new IdGenerator();
  const authenticator = new Authenticator();

  if (!name || !email || !password) {
    let message = '"name", "email" and "password" must be provided';
    throw new Error(message);
  }
  const id: string = idGenerator.generateId();

  const cypherPassword = await hashManager.hash(password);

  await insertUser(id, name, email, cypherPassword);
  const token: string = authenticator.generateToken({ id });
  return token
};
