import { logger } from '../../config/logger.config';
import { Response, Request } from 'express';
import { ApiResponse } from '../../config/response.config';
import { authDBService } from '../../db/postgres/authDB';
import jwt from 'jsonwebtoken';
import { securityService } from '../../util/security/securityProvider.util';
class authController {
	public async registerUser(req: Request, res: Response) {
		try {
			const token = jwt.sign(
				{ username: req.body.email, password: req.body.password },
				`${process.env.CLIENT_SECRET}`,
				{
					expiresIn: 86400 // expires in 24 hours
				}
			);
			req.body.password = securityService.saltText(req.body.password);
			await authDBService.createUser(req.body);
			return ApiResponse.success(res, token);
		} catch (error) {
			logger.error(error);
			return ApiResponse.serverError(res, error);
		}
	}

	public async loginUser(req: Request, res: Response) {
		try {
			const token = `${req.headers['x-access-token']}`;
			if (!token) return ApiResponse.badRequest(res, 'UNAUTHORIZED_ERROR');
			jwt.verify(token, `${process.env.CLIENT_SECRET}`, (err) => {
				if (err) return ApiResponse.serverError(res, 'INCORRECT_TOKEN');
				console.log(`Authenticated user`);
				return;
			});
			// Need to implement logic for userName
			const credentials = await authDBService.getUser(req.body.emailAddress);
			if (!credentials) return ApiResponse.notFound(res, 'USER_NOT_FOUND_ERROR');
			if (credentials.password !== securityService.saltText(req.body.password))
				return ApiResponse.badRequest(res, 'INVALID_CREDENTIALS');
			return ApiResponse.success(res, '');
		} catch (error) {
			logger.error(error);
			return ApiResponse.serverError(res, error);
		}
	}
}

export const AuthController = new authController();
