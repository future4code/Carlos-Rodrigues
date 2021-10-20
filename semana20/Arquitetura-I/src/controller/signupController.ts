import { Request, Response } from "express";
import { signupBusiness } from "../business/signupBusiness";

export const signupController = async (req: Request, res: Response) => {
  try {
    const { name, email, password, role } = req.body;

    const token = await signupBusiness({ name, email, password, role });

    res.status(201).send({ token });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};
