import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { User } from "../types/User";

export const signupBusiness = async ({ name, email, password, role }: any) => {

  if (!name || !email || !password || !role) {
    throw new Error("Preencha todos os campos corretamente");
  }

  const idGenerator = new IdGenerator();
  const id: string = idGenerator.generateId();

  const hashManager = new HashManager();
  const cypherPassword = await hashManager.hash(password);

  const userDatabase = new UserDatabase();
  const user = await userDatabase.verifyUser(email);
  
  if (user) {
    throw new Error("Esse e-mail já está cadastrado.");
  }

  const newUser = new User(id, name, email, cypherPassword, role);
  await userDatabase.createUser(newUser);

  const auth = new Authenticator();
  const token = auth.generateToken({ id, role });

  return token;
};
