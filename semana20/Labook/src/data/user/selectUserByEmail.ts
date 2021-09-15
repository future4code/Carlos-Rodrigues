import { connection } from "../../connection";

export const selectUserByEmail = async (email: string) => {
  try {
    const queryResult: any = await connection("labook_users")
      .select("*")
      .where({ email });

    return {
      id: queryResult[0].id,
      name: queryResult[0].name,
      email: queryResult[0].email,
      password: queryResult[0].password,
    };
  } catch (error) {
    throw new Error(error.slqMessage || error.message);
  }
};
