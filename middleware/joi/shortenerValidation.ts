import Joi from 'joi';

export const shortenerValidation = Joi.object({
  id: Joi.string().required(),
});
