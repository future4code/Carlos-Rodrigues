import { connection } from "../../connection";

export const insertUser = async (
  id: string,
  name: string,
  email: string,
  password: string
) => {
  await connection("labook_users").insert({
    id,
    name,
    email,
    password,
  });
};
