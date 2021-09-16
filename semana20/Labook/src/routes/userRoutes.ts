import express from "express";
import { signupController } from "../controller/user/signupController";

export const usersRouter = express.Router()

usersRouter.post('/signup', signupController)
// usersRouter.post('/login', selectUserByEmail)