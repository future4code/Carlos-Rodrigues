import { Request, Response } from "express";
import { getPostByIdBusiness } from "../../business/post/getPostByIdBusiness";

export const getPostByIdController = async (req: Request, res: Response) => {
  let message = "Success!";

  const { id } = req.params;
  try {
    const post = await getPostByIdBusiness(id);
    res.status(200).send({ message, post });
  } catch (error) {
    let message = error.sqlMessage || error.message;
    res.statusCode = 400;

    res.send({ message });
  }
};
