import { Router } from "express";
import { login, signUp } from "../controllers/auth.controllers.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { loginSchema, signupSchema } from "../schemas/auth.schemas.js";

const authRouter = Router();

authRouter.post("/signup", validateSchema(signupSchema), signUp);
authRouter.post("/login", validateSchema(loginSchema), login);

export default authRouter;