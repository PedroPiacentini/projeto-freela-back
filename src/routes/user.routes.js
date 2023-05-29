import { Router } from "express";
import { getUserById } from "../controllers/user.controllers.js";


const userRouter = Router();

userRouter.get("/user/:id", getUserById);

export default userRouter;