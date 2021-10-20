import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";

export const getAllUsersBusiness = async (token: string) => {
  const authenticator = new Authenticator();
  const auth = authenticator.getTokenData(token);

  const userDatabase = new UserDatabase();
  const user = await userDatabase.getAllUsers();
  return user;
};
