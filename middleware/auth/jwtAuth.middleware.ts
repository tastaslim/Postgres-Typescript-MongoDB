import passport from 'passport';
import { Request, Response, NextFunction } from 'express';
import { some } from 'lodash';
import { allowedURLPathsAuthToken } from '../../config/allowedURLPath.config';
import { ApiResponse } from '../../config/response.config';
import { organizationDBService } from '../../db/postgres/organizationDB';
export const jwtAuthMiddleware = async (
	req: Request,
	res: Response,
	next: NextFunction
): Promise<void | ApiResponse> => {
	if (some(allowedURLPathsAuthToken, (path) => req.path === path)) return next();

	return passport.authenticate('jwt', { session: false, failWithError: true }, async (err, user, info) => {
		if (err) return ApiResponse.badRequest(res, err);
		if (!user) {
			if (info.name === 'TokenExpiredError') return ApiResponse.unAuthorized(res, 'TOKEN_EXPIRED_ERROR');
			else return ApiResponse.unAuthorized(res, 'UNAUTHORIZED_ERROR');
		}

		const isValidOrganization = await organizationDBService.isValidOrganization(user.organizationId, user.userId);
		if (!isValidOrganization)
			return ApiResponse.unAuthorized(
				res,
				'ORGANIZATION_ASSOCIATION_NOT_FOUND_ERROR. Please contact your organization admin'
			);
		req.user = user;
		return next();
	})(req, res, next);
};
