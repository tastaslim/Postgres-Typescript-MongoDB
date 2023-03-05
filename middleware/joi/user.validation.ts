import Joi from 'joi';
export const userRegistrationSchema = Joi.object({
	firstName: Joi.string().min(3).max(30).required(),
	lastName: Joi.string().min(3).max(30).required(),
	password: Joi.string().min(8).max(30).required(),
	emailAddress: Joi.string().email().required()
});

export const userLoginSchema = Joi.object({
	username: Joi.string().min(3).max(30),
	password: Joi.string().min(8).max(30).required(),
	emailAddress: Joi.string().email()
}).xor('username', 'emailAddress');
