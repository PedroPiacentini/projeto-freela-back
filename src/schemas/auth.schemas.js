import joi from "joi";

export const signupSchema = joi.object({
    nome: joi.string().required(),
    email: joi.email().required(),
    password: joi.string().required()
})

export const loginSchema = joi.object({
    email: joi.email().required(),
    password: joi.string().required()
})