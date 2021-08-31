import { User } from "../types/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public async createUser(user: User) {
    try {
      await BaseDatabase.connection("cookenu_users").insert({
        id: user.getId(),
        name: user.getName(),
        email: user.getEmail(),
        password: user.getPassword(),
        role: user.getRole(),
      });
    } catch (error) {
      throw new Error(error.message || error.sqlMessage);
    }
  }
  public async findUserByEmail(email: string): Promise<any> {
    try {
      const user = await BaseDatabase.connection("cookenu_users").where({
        email,
      });
      if (user.length > 0) {
        throw new Error("E-mail já cadastrado");
      }
      
    } catch (error) {
      throw new Error(error.message || error.sqlMessage);
    }
  }
}
