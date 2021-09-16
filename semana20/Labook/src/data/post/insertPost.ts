import { connection } from "../../connection";

export const insertPost = async (post: any) => {
  await connection("labook_posts").insert({
    id: post.id,
    photo: post.photo,
    description: post.description,
    type: post.type,
    author_id: post.tokenData.id,
  });
};
