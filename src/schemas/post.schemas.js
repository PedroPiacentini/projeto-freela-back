import Joi from "joi";

export const postSchema = Joi.object({
    description: Joi.string(),
    picture: Joi.string().uri().required()
})