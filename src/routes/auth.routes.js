import { Router } from "express";
import { signUp } from "../controllers/auth.controllers.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { signupSchema } from "../schemas/auth.schemas.js";

const authRouter = Router();

authRouter.post("/signup", validateSchema(signupSchema), signUp);
authRouter.post("/login");

export default authRouter;