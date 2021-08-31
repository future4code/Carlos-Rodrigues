import { Request, Response } from "express";

export async function login(req: Request, res: Response) {
  try {
    const {email, password} = req.body
  } catch (error) {}
}
