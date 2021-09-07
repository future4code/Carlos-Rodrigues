import { User } from "../types/User";
import { BaseDatabase } from "./BaseDatabase";

const table = "User_Arq";

export class UserDatabase extends BaseDatabase {
  public async createUser(user: User) {
    await BaseDatabase.connection(table).insert({
      id: user.getId(),
      name: user.getName(),
      email: user.getEmail(),
      password: user.getPassword(),
      role: user.getRole(),
    });
  }

  public async verifyUser(email: string): Promise<User> {
    try {
      const user = await BaseDatabase.connection(table).select("*").where({
        email,
      });
      return user[0] && User.toUserModel(user[0]);
    } catch (error) {
      throw new Error(error.message || error.sqlMessage);
    }
  }

  public async getAllUsers(): Promise<User[]> {
    try {
      const users: User[] = [];
      const result = await BaseDatabase.connection(table).select("*");

      for (let user of result) {
        users.push(user);
      }
      
      return users;
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
