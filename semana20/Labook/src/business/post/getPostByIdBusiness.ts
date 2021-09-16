import { connection } from "../../connection";
import { post } from "../../types/post";

export const getPostByIdBusiness = async (id: string) => {
  let message;

  const queryResult: any = await connection("labook_posts")
    .select("*")
    .where({ id });

  if (!queryResult[0]) {
    message = "Post not found";
    throw new Error(message);
  }
  const post: post = {
    id: queryResult[0].id,
    photo: queryResult[0].photo,
    description: queryResult[0].description,
    type: queryResult[0].type,
    createdAt: queryResult[0].created_at,
    authorId: queryResult[0].author_id,
  };
  return post
};
