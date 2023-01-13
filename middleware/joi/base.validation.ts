import { ValidationModel } from './validationModel';
import { Request, Response, NextFunction } from 'express';
import { isPlainObject, map } from 'lodash';
const validate = (body, schema) => {
	const { error } = schema.validate(body, { abortEarly: false, context: body, allowUnknown: false });
	return error && error.details ? error.details : null;
};
export const routeValidationMiddleware = (schema) => {
	if (!schema) throw new Error('Schema is undefined');

	return (req: Request, res: Response, next: NextFunction) => {
		if (!isPlainObject(req.body)) return next(new ValidationModel('Bad request. Request body is not a plain object'));

		const details = validate(req.body, schema);
		if (!details) return next();
		else {
			const message = map(details, (detail) => ({
				field: detail.path && detail.path[0] ? detail.path[0] : detail.path,
				message: detail.message
			}));
			return next(new ValidationModel(message));
		}
	};
};
