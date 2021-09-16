import { connection } from "../../connection";

export const getPostById = async (id: string) => {
  await connection("labook_posts").select("*").where({ id });
};
