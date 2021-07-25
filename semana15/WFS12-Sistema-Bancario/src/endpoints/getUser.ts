import { Request, Response } from "express";
import { users } from "../data";

export const getUser = (
    req: Request,
    res: Response
): void => {
    res.status(200).send(users)
}