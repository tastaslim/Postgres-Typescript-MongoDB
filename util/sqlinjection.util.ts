import { hasScript, hasSql } from './validator.util';
import { ApiResponse } from '../config/response.config';
import { Request, Response, NextFunction } from 'express';
export const sqlInjectionMiddleware = (req: Request, res: Response, next: NextFunction) => {
	let containsSQL = false;
	const queryParams = req.query.query;
	if (queryParams) return ApiResponse.forbidden(res, 'SQL_INJECTION_ERROR');
	if ((req.originalUrl && hasScript(req.originalUrl)) || hasSql(req.originalUrl)) containsSQL = true;

	if (containsSQL || hasScript(JSON.stringify(req.body)) || hasSql(JSON.stringify(req.body)))
		return ApiResponse.forbidden(res, 'SQL_INJECTION_ERROR');
	return next();
};
