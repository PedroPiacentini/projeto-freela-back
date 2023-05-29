import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { validateAuth } from "../middlewares/validateAuth.js";
import { createPost, getPost } from "../controllers/post.controllers.js";


const postRouter = Router();

postRouter.post("/post", validateAuth, createPost);
postRouter.get("/post/:id", getPost);

export default postRouter;