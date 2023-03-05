import { userLoginSchema } from './../../middleware/joi/user.validation';
import { Router } from 'express';
import { apiVersion } from '../../config/api.config';
import { AuthController } from '../controllers/authController';
import { userRegistrationSchema } from '../../middleware/joi/user.validation';
import { routeValidationMiddleware } from '../../middleware/joi/base.validation';

export const authRoute = Router();
const basePath = `/api/${apiVersion}/auth`;
authRoute.post(
	`${basePath}/register`,
	[routeValidationMiddleware(userRegistrationSchema)],
	AuthController.registerUser
);
authRoute.post(`${basePath}/login`, [routeValidationMiddleware(userLoginSchema)], AuthController.loginUser);
