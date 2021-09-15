import express from "express";
import { createPostController } from "../controller/post/createPostController";
import { getPostById } from "../data/post/getPostById";

export const postsRouter = express.Router()

postsRouter.post('/create', createPostController)
postsRouter.get('/:id', getPostById)
