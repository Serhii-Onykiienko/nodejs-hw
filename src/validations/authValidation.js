import { Segments, Joi } from 'celebrate';

export const registerUserSchema = {
  [Segments.BODY]: Joi.object({
    username: Joi.string().trim(),
    email: Joi.string().trim().email().required(),
    password: Joi.string().trim().min(8).required(),
  }),
};

export const loginUserSchema = {
  [Segments.BODY]: Joi.object({
    email: Joi.string().trim().email().required(),
    password: Joi.string().trim().required(),
  }),
};
